import React from 'react';
import styled from 'styled-components';
import {DialogContent, DialogFooter, ConfirmButton, getPrice} from '../FoodDialog/FoodDialog'
import {formatPrice} from "../Data/FoodData";

const OrderStyled = styled.div`
    position: fixed;
    right: 0;
    top: 48px;
    width: 340px;
    background-color: white;
    height: calc(100% - 48px);
    box-shadow: 0px 0px 5px 5px grey;
    z-index: 10;  
    display: flex;
    flex-direction: column;
`

const OrderContent = styled(DialogContent)`
   padding: 20px;
   height: 100%;
`
const OrderContainer = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid grey;
`

const OrderItem = styled.div`
    padding: 10px 0px;
    display: grid;
    grid-template-columns: 20px 150px 20px 60px;
    justify-content: space-between;
`

const DetailItem = styled.div`
    color: grey;
    font-size: 10px;
`

export function Order({orders}){
    const subtotal = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);
    const tax = subtotal * 0.07;
    const total = subtotal + tax;

    return  <OrderStyled>
        
          {orders.length === 0 ?  <OrderContent>Empty order</OrderContent> :
          <OrderContent> {" "}
              <OrderContainer>Your order: 
              
              </OrderContainer> {" "}
                {orders.map(order => (
                    <OrderContainer>
                        <OrderItem>
                            <div>{order.quantity}</div>
                            <div>{order.name}</div>
                           <div></div>
                           <div>{formatPrice(getPrice(order))}</div>
                        </OrderItem>
                        <DetailItem>
                            {order.toppings
                                .filter(t => t.checked)
                                .map (topping => topping.name)
                                .join (", ")
                            }
                        </DetailItem>
                    </OrderContainer>
                ))}
                 <OrderContainer>
                     <OrderItem>
                         <div></div>
                         <div>Subtotal: </div>
                         <div>{formatPrice(subtotal)}</div>
                     </OrderItem>
                     <OrderItem>
                         <div></div>
                         <div>Tax: </div>
                         <div>{formatPrice(tax)}</div>
                     </OrderItem>
                     <OrderItem>
                         <div></div>
                         <div>Total: </div>
                         <div>{formatPrice(total)}</div>
                     </OrderItem>
                 </OrderContainer>
              </OrderContent> 
             
          
        }
            <DialogFooter>
                <ConfirmButton>
                    Check out order
                </ConfirmButton>
            </DialogFooter>   
        </OrderStyled>
}