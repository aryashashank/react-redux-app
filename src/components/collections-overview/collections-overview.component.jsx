import React from 'react';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { PreviewCollection } from '../preview-collection/preview-collection.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';


const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview" >
         {
            collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps, null)(CollectionsOverview)