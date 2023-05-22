import React from "react";

export const ModalContent = ({ entities, type }: any) => {
  return (
    <div>
      <h2>Details</h2>
      {type && (
        <ul>
          <li>type: {entities?.type}</li>
          <li>name: {entities?.name}</li>
          <li>Description: {entities?.adDescription}</li>
          {type == "offer" && <li>Guess Price: {entities?.guessPrice}</li>}
          {type == "offer" && <li>Limit Price: {entities?.limitPrice}</li>}
          <li>City: {entities?.location?.city}</li>
          <li>
            Offer {type} name:{" "}
            {entities?.offerOwner?.name || entities?.orderOwner?.name}
          </li>
          <li>
            Offer {type} gender:{" "}
            {entities?.offerOwner?.gender || entities?.orderOwner?.gender}
          </li>
          <li>
            Offer {type} email:{" "}
            {entities?.offerOwner?.email || entities?.orderOwner?.email}
          </li>
          <li>
            Offer {type} address:{" "}
            {entities?.offerOwner?.address || entities?.orderOwner?.address}
          </li>
          <li>
            Offer {type} phone:{" "}
            {entities?.offerOwner?.phone || entities?.orderOwner?.phone}
          </li>
          <li>Special Info: {entities?.specialInfo}</li>
          <li>isActive: {JSON.stringify(entities?.isActive)}</li>
          <li>isDeleted Info: {JSON.stringify(entities?.isDeleted)}</li>
        </ul>
      )}
    </div>
  );
};
