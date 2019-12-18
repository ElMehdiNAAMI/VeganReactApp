import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function MediaQ(px) {
  return useMediaQuery(`(min-width:${px})`);
}
