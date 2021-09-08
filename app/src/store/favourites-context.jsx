import React, { Component } from "react";
import { createContext } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {},
});
class FavouritesContextProvider extends React.Component {
    state = {
        userFavourites: [],
    };
    addFavouriteHandler = (favouriteMeetup) => {
        let userFavourites = this.state.userFavourites;
        userFavourites = userFavourites.concat(favouriteMeetup);

        this.setState({ userFavourites });
    };
    removeFavouriteHandler = (meetupId) => {
        let userFavourites = this.state.userFavourites;
        userFavourites = userFavourites.filter((item) => item.id != meetupId);

        this.setState({ userFavourites });
    };
    itemIsFavourite = (meetupId) => {
        const userFavourites = this.state.userFavourites;

        return userFavourites.some((meetup) => meetup.id === meetupId);
    };
    render() {
        const context = {
            favourites: this.state.userFavourites,
            totalFavourites: this.state.userFavourites.length,
            addFavourite: this.addFavouriteHandler,
            removeFavourite: this.removeFavouriteHandler,
            itemIsFavourite: this.itemIsFavourite,
        };
        return (
            <FavouritesContext.Provider value={context}>
                {this.props.children}
            </FavouritesContext.Provider>
        );
    }
}

export { FavouritesContextProvider, FavouritesContext };
