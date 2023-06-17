import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../components/hooks/useFetch";
export default function Series() {
    const listSeries = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=6fe33fac321cfd73251ed74a9b71d7c6&hash=c75e2ea928b63a02f5483432a92c221f&limit=20');
    console.log(listSeries);
    return(
        <div>
            <div className="series-page"> 
                <div id="slide-series-image"/>
                <Grid>
                    <Grid.Column>
                        <Container bg="light">
                            <Header as="h2">Las últimas series de Marvel</Header>
                            <ListSeries listSeries={listSeries}/>
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
}