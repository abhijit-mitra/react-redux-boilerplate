import React, {useEffect, memo} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getChaptersByBookId} from '../../../actions';
import {Chapters as ChaptersTemplate} from '../../templates';
import {Container} from '../../organisms';


const Chapters = memo(({match, getChaptersByBookId, chapters}) => {
  const bookId = match.params.bookId;
  useEffect(()=>{
    getChaptersByBookId(bookId);
  }, [bookId, getChaptersByBookId]);
  const {isFetching, error, data} = chapters;
  return (
    <>
      <Container>
        <ChaptersTemplate isFetching={isFetching} error={error} data={(data && data.docs) || []}/>
      </Container>
    </>
  );
});

Chapters.propTypes={
  match: PropTypes.object.isRequired,
  getChaptersByBookId: PropTypes.func.isRequired,
  chapters: PropTypes.object.isRequired,
};

const mapStateToProps=({chapters})=>({chapters});

export default connect(mapStateToProps, {getChaptersByBookId})(Chapters);
