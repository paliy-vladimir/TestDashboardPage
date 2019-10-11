import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import Element from './Element';
import Header from './Header';
import NewInvoice from './NewInvoice';
import SubElement from './SubElement';

import graph from '../../../resourses/img/create-invoice-graph-1@38.46154022216797x.png'
import shape from '../../../resourses/img/create-invoice-shape@2x.png'

class LeftBar extends PureComponent {
  state = {
    selectedPage: 0,
    selectedSubPages: 0,
  };

  onChangeSelectedPage = (selectedPage) => {
    this.setState({selectedPage})
  };

  onChangeSelectedSubPage = (selectedSubPages) => {
    this.setState({selectedSubPages})
  };


  render() {
    const { pages, subPages, openModal } = this.props;
    const { selectedPage, selectedSubPages } = this.state;
    return (
      <Content>
        <Header/>
        {
          pages.map((el, i) =>
          <Element
            id={i}
            key={el.text}
            isSelected={ i === selectedPage}
            onChange={this.onChangeSelectedPage}
            {...el}
          />)
        }
        <NewInvoice onClick={openModal} />
        {
          subPages.map((el, i ) =>
          <SubElement
            id={i}
            key={el.text}
            isSelected={i === selectedSubPages}
            onChange={this.onChangeSelectedSubPage}
            {...el}
          />)
        }
      </Content>
    );
  }
}

const Content = styled.div`
  width: 234px;
  height: 76px;
`;

LeftBar.propTypes = {
  pages: PropTypes.array,
  subPages: PropTypes.array,
};

LeftBar.defaultProps = {
  pages: [
    {
      img: graph,
      text: 'Overview'
    },
    {
      img: shape,
      text: 'Settings'
    }
  ],
  subPages: [
    {
      text: 'Sent',
      value: '25'
    },
    {
      text: 'Cancelled',
      value: '1'
    },
    {
      text: 'Scheduled',
      value: '2'
    },
    {
      text: 'Draft',
      value: '3'
    },
  ]
};


export default LeftBar;
