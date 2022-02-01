import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout.js';
import data from '../../utiles/data.js';
import NextLink from 'next/link';
import useStyle from '../../utiles/styles.js';
import Image from 'next/image';

export default function productScreen() {
  const classess = useStyle();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>product not found</div>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classess.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>back to product</Typography>{' '}
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>category : {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>brand : {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                rating : {product.rating} stars ({product.numReviews})
              </Typography>
            </ListItem>
            <ListItem>
              rating :<Typography>{product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock ? 'in stock' : 'unavailabel'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Add to card
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
