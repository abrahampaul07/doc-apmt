import React from "react";
import faker from "faker";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '200px 50px 0px 100px',
    display: 'inline-block',
  },
  media: {
    height: 240,
  },
});

const Patient = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={faker.image.avatar()}
            title="Patients"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {faker.name.findName()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Age:
              {faker.datatype.number({
    'min': 10,
    'max': 50
})}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Ph:
              {faker.phone.phoneNumberFormat()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> City:
              {faker.address.city()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Address:
              {faker.address.streetAddress()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={faker.image.avatar()}
            title="Patients"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {faker.name.findName()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Age:
              {faker.datatype.number({
    'min': 10,
    'max': 50
})}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Ph:
              {faker.phone.phoneNumberFormat()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> City:
              {faker.address.city()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Address:
              {faker.address.streetAddress()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={faker.image.avatar()}
            title="Patients"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {faker.name.findName()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Age:
              {faker.datatype.number({
    'min': 10,
    'max': 50
})}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Ph:
              {faker.phone.phoneNumberFormat()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> City:
              {faker.address.city()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Address:
              {faker.address.streetAddress()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={faker.image.avatar()}
            title="Patients"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {faker.name.findName()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Age:
              {faker.datatype.number({
    'min': 10,
    'max': 50
})}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Ph:
              {faker.phone.phoneNumberFormat()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> City:
              {faker.address.city()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Address:
              {faker.address.streetAddress()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={faker.image.avatar()}
            title="Patients"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {faker.name.findName()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Age:
              {faker.datatype.number({
    'min': 10,
    'max': 50
})}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Ph:
              {faker.phone.phoneNumberFormat()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> City:
              {faker.address.city()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Address:
              {faker.address.streetAddress()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={faker.image.avatar()}
            title="Patients"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {faker.name.findName()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Age:
              {faker.datatype.number({
    'min': 10,
    'max': 50
})}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Ph:
              {faker.phone.phoneNumberFormat()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> City:
              {faker.address.city()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Address:
              {faker.address.streetAddress()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={faker.image.avatar()}
            title="Patients"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {faker.name.findName()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Age:
              {faker.datatype.number({
    'min': 10,
    'max': 50
})}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Ph:
              {faker.phone.phoneNumberFormat()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> City:
              {faker.address.city()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Address:
              {faker.address.streetAddress()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={faker.image.avatar()}
            title="Patients"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {faker.name.findName()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Age:
              {faker.datatype.number({
    'min': 10,
    'max': 50
})}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Ph:
              {faker.phone.phoneNumberFormat()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> City:
              {faker.address.city()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Address:
              {faker.address.streetAddress()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={faker.image.avatar()}
            title="Patients"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {faker.name.findName()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Age:
              {faker.datatype.number({
    'min': 10,
    'max': 50
})}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Ph:
              {faker.phone.phoneNumberFormat()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> City:
              {faker.address.city()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Address:
              {faker.address.streetAddress()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={faker.image.avatar()}
            title="Patients"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {faker.name.findName()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Age:
              {faker.datatype.number({
    'min': 10,
    'max': 50
})}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Ph:
              {faker.phone.phoneNumberFormat()} 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> City:
              {faker.address.city()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> Address:
              {faker.address.streetAddress()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};


export default Patient;