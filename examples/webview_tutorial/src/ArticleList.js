import React, { Component } from 'react'
import { Text, Image, FlatList, ListItem, StyleSheet, TouchableHighlight, View } from 'react-native'

// Step 1: import Branch

import Article from './Article'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0
  },
})

const planetData = [
  { title: 'Mercury', url: 'https://en.wikipedia.org/wiki/Mercury_(planet)', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg' },
  { title: 'Venus', url: 'https://en.wikipedia.org/wiki/Venus', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg' },
  { title: 'Earth', url: 'https://en.wikipedia.org/wiki/Earth', image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg' },
  { title: 'Mars', url: 'https://en.wikipedia.org/wiki/Mars', image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg' },
  { title: 'Jupiter', url: 'https://en.wikipedia.org/wiki/Jupiter', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg' },
  { title: 'Saturn', url: 'https://en.wikipedia.org/wiki/Saturn', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Saturn-27-03-04.jpeg' },
  { title: 'Uranus', url: 'https://en.wikipedia.org/wiki/Uranus', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg' },
  { title: 'Neptune', url: 'https://en.wikipedia.org/wiki/Neptune', image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg' },
  { title: 'Pluto', url: 'https://en.wikipedia.org/wiki/Pluto', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg' }
]

class ArticleList extends Component {
  // Step 2: Add _unsubscribeFromBranch property

  constructor(props) {
    super(props)
    this.props.planetData = planetData
  }

  // Step 3: Add componentDidMount

  // Step 4: Add componentWillUnmount

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.planetData}
        renderItem={({item}) => <ListItem title={item.title} />}
        onPress={({item}) => this._showArticle(item)}
        keyExtractor={(item, index) => item.url}
      />
    )
  }

  _showArticle(item) {
    console.log("Show article with URL " + item.url)
    this.props.navigation.navigate('Article', item)
  }
}

export default ArticleList
