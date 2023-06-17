import { Container as Content } from "semantic-ui-react";
import "./Container.scss";
export default function Container({children, bg}) {

    //http://gateway.marvel.com/v1/public/comics?ts=1&apikey=6fe33fac321cfd73251ed74a9b71d7c6&hash=c75e2ea928b63a02f5483432a92c221f
    return (
        <div className={bg ? '' : 'container-bg'}>
            <Content>{children}</Content>
        </div>
    );
    
}