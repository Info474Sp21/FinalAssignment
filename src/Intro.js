import React, { Component } from 'react'
import './style.css'
export default class Intro extends Component {
    render() {
        return (
            <div>
                <h2>Info 474</h2>
                <h3>May 1st - June 3rd, 2021</h3>
                <h3>Clayton Novotney, Kelson Flint, Olivia Victorino, Zhan Wu</h3>
                <h1 className="centered">Interactive Data Visualization, Assignment 3/4</h1>
                <br></br>
                <h2>Step 1: Data Selection</h2>
                <h4>Data Selected: Spotify Music Data from <a href="https://www.kaggle.com/yamaerenay/spotify-dataset-19212020-160k-tracks">Kaggle.com</a></h4>
                <p>From this particular website, there were 7 different CSV files that we were able to choice from with different information being stored in each one.</p>
                <ul className="tabbed">
                    <li>artists.csv</li>
                    <li>data_by_artist_o.csv</li>
                    <li>data_by_genres_0.csv</li>
                    <li>data_by_year_o.csv</li>
                    <li><b>data_o.csv</b></li>
                    <li>dict_artists.json</li>
                    <li><b>tracks.csv</b></li>
                </ul>
                <p>Looking at all of the different csv files, we found that we were most interested in the data_o.csv and tracks.csv files since they had the most unique information that we believe we could work with.</p>
                <br></br>
                <p>The columns we are most interested in for the data_o.csv (28.44 MB) file are:</p>
                <p className="tabbed">
                    valence (positivity), year (Year), acousticness (How Acoustic the song is), artists (array of artists contributed), danceability (how suitable the song is for dancing), 
                    duration (time duration of song in ms), energy (how energetic the song is), instrumentalness (ratio of instrumental sounds)
                </p>
                <br></br>
                <p>The columns we are most interested in for the tracks.csv (106.21 MB) file are:</p>
                <p className="tabbed">
                    id (id of track), name (name of track), popularity (popularity of track), duration_ms (time duration of track in ms), explicit (whether it contains explicit (1) content or not (0)), artists (artists contributed to the track), 
                    id_artists (id of artists contributed to the track), release_date (the release date of the album containing this track), dancibility (how suitable the track is for dancing, 0(not danceable)->1(very danceable)), 
                    energy (how energetic the track is, 0(less energetic)->1(very energetic))
                </p>
                <br></br>
                <h2>Step 2: Interactive Data Visualization</h2>
                <p className="tabbed">
                    We got our data from a website called <a href="https://www.kaggle.com/yamaerenay/spotify-dataset-19212020-160k-tracks">Kaggle.com</a> and were able to execute certain SQL queries on the data set that was given.
                </p>
                <br></br>
                <h2>Step 3: Integrating Feedback From Assignment 3</h2>
                <p className="tabbed">
                   After discussing design feedback for our third assignment with both Colin and Kevin, it was recommended that we allow users to change the variables being displayed on both the X and Y axis, since we had 
                   the X-axis only displaying the year. To do this, we were also recommended to incorporate a Scatterplot that will allow us to change the axis's much easier. Since we were happy with our intitial
                   barchart that we developed for assignment 3, we included it in our final assignment, but allowed users to decide which type of visualization they wanted to use with a toggle switch that changed the visualization
                   being rendered on the page.
                </p>
                <p className="tabbed">
                    While developing this new Scatterplot, we also wanted to include more interactivity with the data points on the plot itself. This is where we included the D3 tooltip functionaility that allowed us
                    to display the pertinent information about the specific points whenever a user hovered over the point itself.
                </p>
            </div>
        );
    };
}