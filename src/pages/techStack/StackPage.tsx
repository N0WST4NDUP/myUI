import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import PolylineRoundedIcon from "@mui/icons-material/PolylineRounded";
import ViewCarouselOutlinedIcon from "@mui/icons-material/ViewCarouselOutlined";
import { TechNode } from "entities/techNods/components/TechData";

const categorys: string[] = [
  "FrontEnd",
  "BackEnd",
  "DataBase",
  "DevOps",
  "Framework",
  "Library",
  "Tool",
  "Language",
  "OS",
  "Etc",
];

const techNodes = [
  {
    name: "GitHub",
    description: "description1",
    tag: ["Tool"],
    used: [
      { name: "Remy Sharp", avatar: "/static/images/avatar/1.jpg" },
      { name: "Travis Howard", avatar: "/static/images/avatar/2.jpg" },
    ],
  },
  {
    name: "Spring",
    description: "description2",
    tag: ["BackEnd", "Framework"],
    used: [
      { name: "Cindy Baker", avatar: "/static/images/avatar/3.jpg" },
      { name: "Agnes Walker", avatar: "/static/images/avatar/4.jpg" },
    ],
  },
  {
    name: "Docker",
    description: "description3",
    tag: ["Tool", "DevOps"],
    used: [
      { name: "Remy Sharp", avatar: "/static/images/avatar/1.jpg" },
      { name: "Travis Howard", avatar: "/static/images/avatar/2.jpg" },
      { name: "Agnes Walker", avatar: "/static/images/avatar/4.jpg" },
    ],
  },
];

export default function StackPage() {
  // 필터링 기능
  const [selectedFilter, setSelectedFilter] = React.useState<string>("All");

  const filterClick = (category: string) => {
    setSelectedFilter(category);
  };
  const filteredTechNodes =
    selectedFilter === "All"
      ? techNodes
      : techNodes.filter((stack) => new Set(stack.tag).has(selectedFilter));

  // 뷰모드 전환 기능
  const [viewMode, setViewMode] = React.useState<boolean>(false);
  const toggleViewMode = () => {
    setViewMode(viewMode ? false : true);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Tech Nodes
        </Typography>
        <Typography>1인 개발하는 사람들은 진짜 대단하다...</Typography>
      </div>
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          gap: 3,
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            flexDirection: "row",
            gap: { sm: 1, md: 3 },
            overflow: "auto",
          }}
        >
          <Chip
            onClick={() => filterClick("All")}
            size="medium"
            label="All"
            sx={{
              backgroundColor:
                selectedFilter === "All" ? "none" : "transparent",
              border: selectedFilter === "All" ? "1px solid" : "none",
              borderColor: "divider",
            }}
          />
          {categorys.map((category, index) => (
            <Chip
              key={index}
              onClick={() => filterClick(category)}
              size="medium"
              label={category}
              sx={{
                backgroundColor:
                  selectedFilter === category ? "none" : "transparent",
                border: selectedFilter === category ? "1px solid" : "none",
                borderColor: "divider",
              }}
            />
          ))}
        </Box>
        <IconButton
          size="small"
          aria-label="viewMode"
          children={
            viewMode ? <ViewCarouselOutlinedIcon /> : <PolylineRoundedIcon />
          }
          onClick={toggleViewMode}
        />
      </Box>

      {/* 여기까지 */}

      <Box
        sx={{
          height: { xs: "320px", md: "420px" },
          padding: { xs: 1, md: 2 },
          border: "1px solid red",
        }}
      >
        {filteredTechNodes.map((item, index) => (
          <TechNode
            key={index}
            sx={{
              backgroundImage: `url(/stackIcon/${
                item.name || item.name + "-dark"
              }.svg)`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
