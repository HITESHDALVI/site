import { Card, Box, Typography, Button, styled } from '@mui/material';

import { addEllipsis } from '../utils/util';
import GroupButton from './GroupButton';

const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
`;

const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;

const CartItem = ({ item, removeItemFromCart }) => {

    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt="product" style={{ height: 110, width: 110 }} />
                <GroupButton />
            </LeftComponent>
            <Box style={{ margin: 20 }}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                    <Cost component="span" >₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span" ><strike>₹{item.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{item.price.discount} off</Discount>
                </Typography>
                <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem;