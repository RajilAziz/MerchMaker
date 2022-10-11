import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const AddOrder = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          image="https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4197.jpg"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            White Sneakers
          </Typography>
          <Typography variant="h6">Product Detail</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Name : Casual Sneakers For Men in Green & White </Typography>
            <Typography variant="subtitle2" color="text.secondary">Material : Rubber</Typography>
             <Typography variant="subtitle2" color="text.secondary">Sole Material : Rubber</Typography>
            <Typography variant="subtitle2" color="text.secondary">Pattern : Perforations Fastening & Back</Typography>
            <Typography variant="subtitle2" color="text.secondary">Detail : Lace-Up</Typography>
            <Typography variant="subtitle2" color="text.secondary"> Net Quantity (N) : 1 </Typography>
           
            <Typography variant="subtitle2" color="text.secondary">Sizes : IND-6, IND-7, IND-8,
            IND-9, IND-10 </Typography>
            
            <Typography variant="subtitle2" color="text.secondary">
            Country of Origin : India
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddOrder;
