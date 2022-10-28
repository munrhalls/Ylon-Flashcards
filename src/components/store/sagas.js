import { db } from "./Database";
import { collection, addDoc } from "firebase/firestore"; 
import { call, put, takeEvery } from 'redux-saga/effects';
import {v4 as uuid} from 'uuid'

async function dbAddDeck() {
    await addDoc(collection(db, "decksForUserId"), {
       flashcards: [{question: 'atDB_Question', answer: 'atDB_Answer'}]
      });
} 
function* dbUpdateDeck(action) {
    try {
       const deckUpdate = yield.call(dbAddDeck, action.payload.deck);
       
    }
  }