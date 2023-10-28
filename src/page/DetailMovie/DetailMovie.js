import React, { useEffect, useState } from "react";
import { getDetailMovie, getListMovie } from "../../api/api";
import { useParams } from "react-router-dom";
import { Progress } from "antd";
import TabMovie from "../Home/TabMovie/TabMovie";
import TabDetail from "../Home/TabMovie/TabDetail";
import styled from "styled-components";

export default function DetailMovie() {
  let params = useParams();
  console.log(params);
  const [Detail, setDetail] = useState({});
  useEffect(() => {
    getDetailMovie(params.id)
      .then((res) => {
        console.log(res.data.content);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const DetailPageContainer = styled.div`
    margin: 0 auto;
    padding-top: 2.8rem;
    @media (max-width: 820px) {
      padding-top: 1rem;
    }
  `;

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    @media (max-width: 820px) {
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
    }
  `;

  const ImageContainer = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: fill;
    aspect-ratio: 1/1;
    border-radius: 3rem;
    grid-column: 1 / span 1;
    @media (max-width: 820px) {
      grid-column: 1;
      grid-row: 1;
    }
  `;

  const ContentContainer = styled.div`
    padding: 2rem;
    grid-column: 2 / span 2;
    @media (max-width: 820px) {
      padding: 1rem;
      grid-column: 1;
      grid-row: 2;
    }
  `;

  return (
    <div>
      <DetailPageContainer id="detailPage" className="space-y-10">
        <div className="container pt-28 pb-20">
          <GridContainer>
            <ImageContainer src={Detail.hinhAnh} alt="" />
            <ContentContainer>
              <div className="mb-12">
                <h1>{Detail.tenPhim}</h1>
                <p className="font-bold">Mô tả:</p>
                <p>{Detail.moTa}</p>
              </div>
              <div>
                <Progress
                  size={200}
                  format={(percent) => (
                    <span className="text-red-700 font-medium block">
                      {percent / 10} điểm
                    </span>
                  )}
                  type="circle"
                  percent={Detail.danhGia * 10}
                  strokeWidth={10}
                  strokeColor={"pink"}
                />
              </div>
            </ContentContainer>
          </GridContainer>
        </div>
      </DetailPageContainer>
      <div className="detail py-32">
        <div className=" bg-white container shadow p-3 border-l-black rounded-3xl">
          <TabDetail />
        </div>
      </div>
    </div>
  );
}
