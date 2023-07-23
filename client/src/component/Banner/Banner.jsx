import { Box, Typography, styled } from "@mui/material";

const Image = styled(Box)`
  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
    center/50%  #000;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
`;
const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #b5baf5;
  color: #393b3a;
  font-weight: 600;
  padding:4px;
  width:400px;
  text-align:center;
  border-radius: 20px;
`;

const Banner = () => {
  return (
    <Image>
      <Heading>BLOG</Heading>
      <SubHeading>Futer is comming</SubHeading>
    </Image>
  );
};

export default Banner;
