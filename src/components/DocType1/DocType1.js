import React from 'react';
import s from './DocType1.module.css';

const DocType1 = (props) => {

	const Document = (d_props) => {
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
	}

	let documentsElements = props.state.type1Documents
		.map(d => <Document text={d.text} code={"dt1-" + d.id} id={d.id} />);

	let onSaveDocument = () => {
		props.saveDocument();
	};
	let onDocumentTextChange = (e) => {
		let text = e.target.value;
		props.updateNewDocument(text);
	};
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
					onChange={onDocumentTextChange}
					value={props.state.newDocumentText}
					placeholder='введите документ и нажмите кнопку отправить'
				/>
				<div>
					<button onClick={onSaveDocument}>Save document</button>
				</div>
			</div>
		</div>
	);
}

export default DocType1;