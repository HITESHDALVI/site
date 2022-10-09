import { Typography, Box, styled } from '@mui/material';
import EmptyCartImg from "../images/EmptyCartImg.jpg"

const Component = styled(Box)`
    width: 80%%;
    height: 65vh;
    background: #fff;
    margin: 80px 140px;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
`;

const Image = styled('img')({
    width: '25%'
});


const EmptyCart = () => {
    
    return (
        <Component>
            <Container>
                <Image src={EmptyCartImg} />
                <Typography>Your cart is empty!</Typography>
                <Typography component="span">Add items to it now.</Typography>
            </Container>
        </Component>
    )
}

export default EmptyCart;
