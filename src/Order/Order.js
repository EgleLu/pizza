import React from 'react';
import styled from 'styled-components';
import {DialogContent, DialogFooter, ConfirmButton} from '../FoodDialog/FoodDialog'

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
`

export function Order({orders}){
    return  <OrderStyled>
        
          {orders.length === 0 ?  <OrderContent>Empty order</OrderContent> :
          <OrderContent> {" "}
              <OrderContainer>Your order: 
              
              </OrderContainer> {" "}
                {orders.map(order => (
                    <OrderContainer>
                        <OrderItem>{order.name}</OrderItem>
                    </OrderContainer>
                ))}
              </OrderContent> 
          
        }
            <DialogFooter>
                <ConfirmButton>
                    Check out order
                </ConfirmButton>
            </DialogFooter>   
        </OrderStyled>
}