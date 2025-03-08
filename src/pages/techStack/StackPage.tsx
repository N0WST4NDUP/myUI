import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import ViewCarouselOutlinedIcon from "@mui/icons-material/ViewCarouselOutlined";

const categorys: string[] = [
  "FrontEnd",
  "BackEnd",
  "DataBase",
  "test1",
  "test2",
  "test3",
  "test4",
  "test 5",
];

const techStacks = [
  {
    icon: "https://picsum.photos/800/450?random=1",
    tag: "BackEnd",
    name: "name1",
    description: "description1",
    used: [
      { name: "Remy Sharp", avatar: "/static/images/avatar/1.jpg" },
      { name: "Travis Howard", avatar: "/static/images/avatar/2.jpg" },
    ],
  },
  {
    icon: "https://picsum.photos/800/450?random=2",
    tag: "FrontEnd",
    name: "name2",
    description: "description2",
    used: [
      { name: "Cindy Baker", avatar: "/static/images/avatar/3.jpg" },
      { name: "Agnes Walker", avatar: "/static/images/avatar/4.jpg" },
    ],
  },
  {
    icon: "https://picsum.photos/800/450?random=3",
    tag: "DataBase",
    name: "name3",
    description: "description3",
    used: [
      { name: "Trevor Hansen", avatar: "/static/images/avatar/5.jpg" },
      { name: "Sandra Adams", avatar: "/static/images/avatar/6.jpg" },
    ],
  },
  {
    icon: "https://picsum.photos/800/450?random=4",
    tag: "BackEnd",
    name: "name4",
    description: "description4",
    used: [
      { name: "Ali Connors", avatar: "/static/images/avatar/7.jpg" },
      { name: "Jennifer Smith", avatar: "/static/images/avatar/8.jpg" },
    ],
  },
  {
    icon: "https://picsum.photos/800/450?random=5",
    tag: "FrontEnd",
    name: "name5",
    description: "description5",
    used: [
      { name: "Michael Scott", avatar: "/static/images/avatar/9.jpg" },
      { name: "Dwight Schrute", avatar: "/static/images/avatar/10.jpg" },
    ],
  },
  {
    icon: "https://picsum.photos/800/450?random=6",
    tag: "DataBase",
    name: "name6",
    description: "description6",
    used: [
      { name: "Jim Halpert", avatar: "/static/images/avatar/11.jpg" },
      { name: "Pam Beesly", avatar: "/static/images/avatar/12.jpg" },
    ],
  },
  {
    icon: "https://picsum.photos/800/450?random=7",
    tag: "BackEnd",
    name: "name7",
    description: "description7",
    used: [
      { name: "Stanley Hudson", avatar: "/static/images/avatar/13.jpg" },
      { name: "Phyllis Vance", avatar: "/static/images/avatar/14.jpg" },
    ],
  },
  {
    icon: "https://picsum.photos/800/450?random=8",
    tag: "FrontEnd",
    name: "name8",
    description: "description8",
    used: [
      { name: "Ryan Howard", avatar: "/static/images/avatar/15.jpg" },
      { name: "Kelly Kapoor", avatar: "/static/images/avatar/16.jpg" },
    ],
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette.background.default,
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

function Author({ authors }: { authors: { name: string; avatar: string }[] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(", ")}
        </Typography>
      </Box>
    </Box>
  );
}

export default function StackPage() {
  const [selectedFilter, setSelectedFilter] = React.useState<string>("All");
  const [viewMode, setViewMode] = React.useState<boolean>(false);

  const filterClick = (category: string) => {
    setSelectedFilter(category);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode ? false : true);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Tech Stacks
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
          children={viewMode ? <ViewCarouselOutlinedIcon /> : <AppsIcon />}
          onClick={toggleViewMode}
        />
      </Box>

      {/* 여기까지 */}

      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          justifyContent: "center",
          overflow: "auto",
          border: "1px solid red",
        }}
      >
        {(selectedFilter === "All"
          ? techStacks
          : techStacks.filter((stack) => stack.tag === selectedFilter)
        ).map((item, index) => (
          <SyledCard key={index} variant="outlined" tabIndex={index}>
            <CardMedia
              component="img"
              alt="green iguana"
              image={item.icon}
              sx={{
                aspectRatio: "16 / 9",
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {item.tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {item.name}
              </Typography>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {item.description}
              </StyledTypography>
            </SyledCardContent>
            <Author authors={item.used} />
          </SyledCard>
        ))}
      </Box>
    </Box>
  );
}
