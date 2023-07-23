import {
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { categories } from "../../constants/data";

import { Link, useSearchParams } from "react-router-dom";

const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
`;
const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #6496ed;
  color: #fff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <StyledLink to={`/creatPost?category=${category || ""} `}>
        {" "}
        <StyledButton variant="contained">Create BLog</StyledButton>{" "}
      </StyledLink>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>
              {" "}
              <StyledLink to="/"> ALL Categories </StyledLink>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <StyledLink    to={`/?category=${category.type}`}>
                <TableCell>{category.type}</TableCell>
              </StyledLink>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default Categories;
