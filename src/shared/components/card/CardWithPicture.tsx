import Typography from "@suid/material/Typography";
import Card from "@suid/material/Card";
import CardContent from "@suid/material/CardContent";
import CardMedia from "@suid/material/CardMedia";
import CardActionArea from "@suid/material/CardActionArea";
import { JSXElement } from "solid-js";

interface CardWithPictureProps {
  title: string;
  img: string;
  description: string;
  href: string;
}

export const CardWithPicture = (props: CardWithPictureProps): JSXElement => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea component={"a"} href={props.href}>
        <CardMedia component="img" height="140" image={props.img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
