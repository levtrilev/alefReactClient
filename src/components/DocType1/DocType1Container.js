import { saveDocumentAC, updateNewDocumentAC } from './../../redux/doctype1-reducer';
import { connect } from 'react-redux';
import DocType1 from './DocType1';

const mapStateToProps = (state) => {
	return {
		state: state.docType1Page
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		updateNewDocument: (text) => {
			dispatch(updateNewDocumentAC(text));
		},
		saveDocument: () => {
			dispatch(saveDocumentAC());
		}
	}
}
const DocType1Container = connect(mapStateToProps, mapDispatchToProps)(DocType1);

export default DocType1Container;