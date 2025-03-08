import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
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

const cardData = [
  {
    img: "https://picsum.photos/800/450?random=1",
    tag: "BackEnd",
    title: "Revolutionizing software development with cutting-edge tools",
    description:
      "Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.",
    authors: [
      { name: "Remy Sharp", avatar: "/static/images/avatar/1.jpg" },
      { name: "Travis Howard", avatar: "/static/images/avatar/2.jpg" },
    ],
  },
  {
    img: "https://picsum.photos/800/450?random=2",
    tag: "FrontEnd",
    title: "Innovative product features that drive success",
    description:
      "Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.",
    authors: [{ name: "Erica Johns", avatar: "/static/images/avatar/6.jpg" }],
  },
  {
    img: "https://picsum.photos/800/450?random=3",
    tag: "BackEnd",
    title: "Designing for the future: trends and insights",
    description:
      "Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.",
    authors: [{ name: "Kate Morrison", avatar: "/static/images/avatar/7.jpg" }],
  },
  {
    img: "https://picsum.photos/800/450?random=4",
    tag: "DataBase",
    title: "Our company's journey: milestones and achievements",
    description:
      "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
    authors: [{ name: "Cindy Baker", avatar: "/static/images/avatar/3.jpg" }],
  },
  {
    img: "https://picsum.photos/800/450?random=45",
    tag: "BackEnd",
    title: "Pioneering sustainable engineering solutions",
    description:
      "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
    authors: [
      { name: "Agnes Walker", avatar: "/static/images/avatar/4.jpg" },
      { name: "Trevor Henderson", avatar: "/static/images/avatar/5.jpg" },
    ],
  },
  {
    img: "https://picsum.photos/800/450?random=6",
    tag: "DataBase",
    title: "Maximizing efficiency with our latest product updates",
    description:
      "Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.",
    authors: [{ name: "Travis Howard", avatar: "/static/images/avatar/2.jpg" }],
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
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
      <Typography variant="caption">July 14, 2021</Typography>
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

      <Grid container spacing={2}>
        {(selectedFilter === "All"
          ? cardData
          : cardData.filter((data) => data.tag === selectedFilter)
        ).map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <SyledCard variant="outlined" tabIndex={index}>
              <CardMedia
                component="img"
                alt="green iguana"
                image={item.img}
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
                  {item.title}
                </Typography>
                <StyledTypography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  {item.description}
                </StyledTypography>
              </SyledCardContent>
              <Author authors={item.authors} />
            </SyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
