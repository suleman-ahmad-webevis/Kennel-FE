import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const blogCategories = [
  "Breeding",
  "Puppies",
  "Training",
  "Show Handling",
  "Exercise",
  "Feeding",
  "Grooming",
  "Health",
  "Welfare",
  "Travel",
  "DogShows",
  "Judging",
  "NFT news",
];

const BlogSidebar = ({ open, Toggle }) => {
  const navigate = useNavigate();

  return (
    <BlogSidebarContainer open={open}>
      {/* <SidebarTitle>Dog</SidebarTitle> */}
      <SidebarTitle FontWeight>Categories</SidebarTitle>
      <SidebarDivider />
      <DogsList>
        {blogCategories.map((item, index) => (
          <DogTypes
            key={index}
            onClick={() => navigate(`/blogs?category=${item}`)}
          >
            {item}
          </DogTypes>
        ))}
      </DogsList>
      <SidebarTitle>Crypto</SidebarTitle>
      <SidebarTitle>News</SidebarTitle>
      <SidebarTitle>Sales</SidebarTitle>
    </BlogSidebarContainer>
  );
};

export const BlogSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 20%;
  height: 700px;
  background: #ffffff;
  border-radius: 12px;
  position: relative;
  @media screen and (max-width: 1110px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: absolute;
    left: 10px;
    z-index: 999;
    margin-top: -10px;
    background-color: #fff;
  }
`;

export const SidebarTitle = styled.div`
  font-style: normal;
  font-weight: ${({ FontWeight }) => (FontWeight ? "600" : "800")};
  font-size: 18px;
  line-height: 160%;
  color: #000f5c;
  cursor: pointer;
`;

export const SidebarDivider = styled.div`
  width: 100%;
  border: 1px solid #000f5c;
`;

export const DogsList = styled.div`
  margin-bottom: 30px;
`;

export const DogTypes = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: #000000;
  cursor: pointer;
`;

export default BlogSidebar;
