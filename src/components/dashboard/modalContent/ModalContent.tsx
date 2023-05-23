import React from "react";
import { UnOrderedList } from "./Theme";

export const ModalContent = ({ entities, type }: any) => {
  return (
    <div>
      <h2>Details</h2>
      {type && (
        <UnOrderedList>
          <div>
          <li>type: {entities?.type}</li>
          <li>name: {entities?.name}</li>
          <li>Description: {entities?.adDescription}</li>
          {type == "Offer" && <li>Guess Price: {entities?.guessPrice}</li>}
          {type == "Offer" && <li>Limit Price: {entities?.limitPrice}</li>}
          <li>City: {entities?.location?.city}</li>
          <li>
            {type} owner name:{" "}
            {entities?.offerOwner?.name || entities?.orderOwner?.name}
          </li>
          <li>
            {type} owner gender:{" "}
            {entities?.offerOwner?.gender || entities?.orderOwner?.gender}
          </li>
          </div>
          <div>
          <li>
            {type} owner email:{" "}
            {entities?.offerOwner?.email || entities?.orderOwner?.email}
          </li>
          <li>
            {type} owner address:{" "}
            {entities?.offerOwner?.address || entities?.orderOwner?.address}
          </li>
          <li>
            {type} owner phone:{" "}
            {entities?.offerOwner?.phone || entities?.orderOwner?.phone}
          </li>
          <li>Special Info: {entities?.specialInfo}</li>
          <li>isActive: {JSON.stringify(entities?.isActive)}</li>
          <li>isDeleted Info: {JSON.stringify(entities?.isDeleted)}</li>
          </div>
      
        </UnOrderedList>
      )}
    </div>
  );
};
