import React from 'react';
import s from './DocType1.module.css';

class DocType1 extends React.Component {

	Document = (d_props) => {
		return (
			<div>
				<span>
					{d_props.id}
				</span>
				<span>
					{d_props.text}
				</span>
				<span>
					{d_props.code}
				</span>
			</div>
		)
	};
	onSaveDocument = () => {
		this.props.saveDocument();
	};
	onDocumentTextChange = (e) => {
		let text = e.target.value;
		this.props.updateNewDocument(text);
	};
	render() {
		let documentsElements = this.props.state.type1Documents
		.map(d => <this.Document text={d.text} code={"dt1-" + d.id} id={d.id} />);

		return (
		<div className={s.doc_wrapper}>
			<div className={s.list_header}>
				<span className={s.col}>
					head-col-1
				</span>
				<span className={s.col}>
					head-col-2
				</span>
				<span className={s.col}>
					head-col-3
				</span>
			</div>
			<div className={s.document_list}>
				{documentsElements}
			</div>
			<div className={s.document_new}>
				<textarea
					onChange={this.onDocumentTextChange}
					value={this.props.state.newDocumentText}
					placeholder='введите документ и нажмите кнопку отправить'
				/>
				<div>
					<button onClick={this.onSaveDocument}>Save document</button>
				</div>
			</div>
		</div>
	);
	}
}

export default DocType1;