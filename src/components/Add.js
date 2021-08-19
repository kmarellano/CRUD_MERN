import React from 'react'
import Textbox from './Textbox'
import Descriptionbox from './Descriptionbox';
import Header from './Header'

function Add() {
    return (
        <div>
        <Header title="Add Item" text="Back" destination=""/>
        <Textbox name="title" text="Title"/>
        <Descriptionbox name="description" text="Description"/>
        </div>
    )
}
export default Add
