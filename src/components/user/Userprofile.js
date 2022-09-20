import React from "react";
import { Container, Grid, Typography, Card, CardContent ,Breadcrumbs} from "@mui/material";
import{HomeIcon} from '@mui/icons-material'

const Userprofile = () => {
  return (
    <div>
      <Container maxWidth="x1" className="mt-5">
        <div class="card">
          
          <Grid container spacing={5}>
            <Grid item md={3} sm={3} xs={12}>
              <Card sx={{ marginLeft: 2, marginBottom: 2, marginTop: 15 }}>
                <CardContent>
                  <Typography variant="h5">Profile</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card sx={{ marginBottom: 2, marginTop: 15 }}>
                <CardContent>
                  <Typography variant="h5">Profile</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
              <Card sx={{ marginBottom: 2, marginTop: 15, marginRight: 2 }}>
                <CardContent>
                  <Typography variant="h5">Profile</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        {/* <Grid container>
                  <Grid item  md={3} sm={3} xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">
                                Profile
                            </Typography>
                        </CardContent>
                    </Card>
                  </Grid>
                  <Grid item ></Grid>
                

               </Grid> */}
      </Container>
    </div>
  );
};

export default Userprofile;
