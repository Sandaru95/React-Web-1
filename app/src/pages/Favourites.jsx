import React, { Component } from "react";
import { useContext } from "react";
import { FavouritesContext } from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
    const favouriteCtx = useContext(FavouritesContext);

    let content;

    if (favouriteCtx.totalFavourites == 0) {
        content = <p>You got no favourites. Start adding some</p>;
    } else {
        content = (
            <section>
                <h1>Favourites</h1>
                <MeetupList meetups={favouriteCtx.favourites} />
            </section>
        );
    }

    return content;
}

export default FavouritesPage;
