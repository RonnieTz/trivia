import { Box, FormControl, FormLabel, NativeSelect } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { changeCategory } from "../redux/options";

const Category = () => {
  const { category } = useSelector((state: RootState) => state.options);
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState<{ name: string; id: string }[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("https://opentdb.com/api_category.php");
      setData(res.data.trivia_categories);
    };
    fetchCategories();
  }, []);

  return (
    <Box
      width={"80%"}
      marginTop={3}
      border={"0.1px solid blue"}
      padding={2}
      borderRadius={2}
    >
      <FormControl fullWidth>
        <FormLabel>Category</FormLabel>

        <NativeSelect
          value={category}
          onChange={(e) => dispatch(changeCategory(e.target.value))}
          inputProps={{ name: "Category", id: "category" }}
        >
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default Category;
