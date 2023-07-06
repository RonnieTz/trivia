import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setCategory } from "../redux/optionSlice";

const Category = () => {
  const { category } = useSelector((state: RootState) => state.option);
  const dispatch = useDispatch<AppDispatch>();
  const [categories, setCategories] = useState<{ name: string; id: number }[]>(
    []
  );
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://opentdb.com/api_category.php");
      setCategories(res.data.trivia_categories);
    };
    fetchData();
  }, []);
  return (
    <Box width={"100%"} height={"40%"} marginTop={"5%"}>
      <Typography marginBottom={"4%"} variant="h5" align="center">
        Categories
      </Typography>
      <FormControl sx={{ marginBottom: "2%" }} fullWidth>
        <Select
          onChange={(e) => dispatch(dispatch(setCategory(e.target.value)))}
          value={category}
        >
          {categories?.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Category;
