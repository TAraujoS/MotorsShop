import styled from "styled-components";

export const ProductContainer = styled.section`
  min-width: 17rem;
  max-width: 25rem;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;

  .product-img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 100%;
    background-color: var(--color-grey7);
    border: 2px solid var(--color-grey7);
    overflow: hidden;

    img {
      width: 100%;
      transform: scale(1);

      transition: 0.4s;

      &:hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    }

    :hover {
      border: 2px solid var(--color-brand1);
    }
  }

  .product-title {
    color: var(--color-grey1);
  }

  .product-description {
    height: 5rem;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: justify;
    color: var(--color-grey2);
  }
`;

export const ProductOwner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  .owner-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 150px;
    background-color: var(--color-brand2);
    color: var(--color-whiteFixed);
  }

  .owner-name {
    color: var(--color-grey2);
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .product-details {
    display: flex;
    gap: 10px;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.25rem 0.5rem;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      border-radius: 5px;
      background-color: var(--color-brand4);
      color: var(--color-brand1);
    }
  }

  .product-price {
    font-family: "Lexend", sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: var(--color-grey1);
  }
`;
