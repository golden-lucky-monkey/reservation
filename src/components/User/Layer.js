import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";
import Box from "@mui/material/Box";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Layer = () => {
  const stData = useSelector(state => state);

  return (
    <div className="ULayer">
      <div className="ULayer_content ">
        <Link className="homeIcon" to="/">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "#0045FF", fontSize: 30 }} />
          </Box>
        </Link>
        <h2 className="pageTitle">
          <span>{stData.auth.Title}</span>
        </h2>
      </div>
    </div>
  );
}

export default Layer;