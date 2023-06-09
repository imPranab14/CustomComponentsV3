import Sortable from "../CustomComponents/Tables/Sortable/SortableTable";
import Filterable from "../CustomComponents/Tables/Filterable/FilterableTable";
import Editable from "../CustomComponents/Tables/Editable/Editable";
import CRUDIE from "../CustomComponents/Tables/CRUDIE/CRUDIE";
import SortFilterEdit from "../CustomComponents/Tables/Sort-Filter-Edit/Sort-Filter-Edit";
import Expandable from "../CustomComponents/Tables/ExpanedTable/ExpandedUsingRecursion";
import { useEffect, useState } from "react";
import axios from "axios";
import ExpandableWithComponent from "../CustomComponents/Tables/ExpanedTable/ExpandableWithComponent";

import Popup from "../CustomComponents/PopUps/Popup";

import InnerCard from "../CustomComponents/Tables/ExpanedTable/InnerCard";

//CSS File
import TableStyle from "../Pages/TableStyle.module.css"

const Tables = ({ upDateData, data, expandableTableData, colmns }) => {
  // const [data , setData] = useState();
  const [dummyData, setDummyData] = useState();
  const [columns, setColumns] = useState();

  const [sortableParaeterStructurePopup, setSortableParaeterStructurePopup] =
    useState(false);
  const [sortableRealPropPopup, setSortableRealPropPopup] = useState(false);

  const [editableParaeterStructurePopup, setEditableParaeterStructurePopup] =
    useState(false);
  const [editableRealPropPopup, setEditableRealPropPopup] = useState(false);

  const [sortEditFilterRealPropPopup, setSortEditFilterRealPropPopup] =
    useState(false);

  const [expandableWithCompRealPropPopup, setExpandableWithCompRealPropPopup] =
    useState(false);

  const [crudieRealPropPopup, setCrudieRealPropPopup] = useState(false);

  useEffect(() => {
    axios.get(process.env.REACT_APP_TEST_API).then((response) => {
      const tempDataFromDB = response.data;
      setDummyData(tempDataFromDB);

      console.log(tempDataFromDB);

      // let tempCols = Object.keys(tempDataFromDB[0]).map((colName) =>
      // ({
      //     column: colName, sortable: true, editable: true, filterable: true,
      //     formInputDetails: { defaultVal: "abcd", inputType: "text", radioLabel: "Please select your favorite Web language:", data: [{ label: "xyz", value: "abc" }, { label: "uvw", value: "def" }], min: 0, max: 5 }
      //     // if inut type is dropdown then [{ label: "xyz", value: "abc" }]
      //     // if it it text then {placeholder: "xyz" , name: "name"}
      //     // if checkbox {label: "label" }
      //     // if date {min: "" , max: "" }
      //     // if int {min: "" , max: "" }
      //     // if textarea  {placeholder: "xyz" , name: "name" , lines: 2}

      // }));

      let tempCols = [
        // {
        //     column: "_id",
        //     columnLabel: "Id",
        //     sortable: true,
        //     filterable: true,
        //     editable: false,
        //     createOnce: false,
        //     formInputDetails: {
        //         defaultVal: "",
        //         inputType: "text"
        //     }
        // },
        {
          column: "first_name",
          columnLabel: "First Name",
          sortable: true,
          filterable: true,
          editable: true,
          createOnce: false,
          formInputDetails: {
            defaultVal: "",
            inputType: "text",
          },
        },
        {
          column: "last_name",
          columnLabel: "Last Name",
          sortable: true,
          filterable: true,
          editable: true,
          createOnce: false,
          formInputDetails: {
            defaultVal: "",
            inputType: "text",
          },
        },
        {
          column: "email",
          columnLabel: "Email",
          sortable: true,
          filterable: true,
          editable: false,
          createOnce: true,
          formInputDetails: {
            defaultVal: "",
            inputType: "text",
          },
        },
        {
          column: "gender",
          columnLabel: "Gender",
          sortable: true,
          filterable: true,
          editable: true,
          createOnce: false,
          formInputDetails: {
            defaultVal: "",
            inputType: "radio",
            label: "Please select your gender:",
            data: [
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
              { label: "Prefer Not to say", value: "NA" },
            ],
          },
        },
        // {
        //     column: "ip_address",
        //     columnLabel: "Ip Address",
        //     sortable: false,
        //     filterable: true,
        //     editable: true,
        //     createOnce: false,
        //     formInputDetails: {
        //         defaultVal: "",
        //         inputType: "text"
        //     }
        // },
        {
          column: "country",
          columnLabel: "Country",
          sortable: true,
          filterable: true,
          editable: true,
          createOnce: false,
          formInputDetails: {
            defaultVal: "Nepal",
            inputType: "dropdown",
            label: "Please select your Country:",
            data: [
              { label: "India", value: "India" },
              { label: "Nepal", value: "Nepal" },
              { label: "Sri Lanka", value: "Sri Lanka" },
              { label: "Malaysia", value: "Malaysia" },
              { label: "Japan", value: "Japan" },
            ],
          },
        },
      ];
      tempCols.innerColumns = [
        {
          column: "current_address",
          sortable: true,
          filterable: true,
        },
        {
          column: "permanent_address",
          sortable: true,
          filterable: true,
        },
      ];

      tempCols.innerColumns.innerColumns = [
        {
          column: "current_address",
          sortable: true,
          filterable: true,
        },
        {
          column: "permanent_address",
          sortable: true,
          filterable: true,
        },
      ];
      setColumns(tempCols);
    });
  }, []);

  return (
    <div className={TableStyle.MainBody}>
      {/* ------------------------------------------------------------------Sortable------------------------------------------- */}

      {/* Sortable */}
      <h1 className={TableStyle.MainHeader}>Sortable Table</h1>

      <p className={TableStyle.ContentText}>Features</p>
      <div className={TableStyle.MainText}>
        <ul>
          <li>
            Sortable:- By clicking of the particular column of the table, It will
            sort the table wrt. clicked column{" "}
          </li>
          <li>
            Pagination:- There are two buttons next and prev to navigate to
            different pages
          </li>
          <li>
            No of Records per page:- It is a dropown, On selecting value no of
            records will be changed as selected
          </li>
        </ul>
      </div>
      {dummyData && columns && (
        <Sortable
          data={dummyData}
          columns={columns}
          tableHeader="Sortable Table"
          recordsPerPageOption={[5, 10, 20]}
          defaultRecordPerPage={5}
        />
      )}

      <div className={TableStyle.BtnAlign}>
      <button className={TableStyle.Btn1} onClick={() => setSortableRealPropPopup(true)}>
        Show Props Strucutre
      </button>
      <Popup
        visible={sortableRealPropPopup}
        onClose={() => setSortableRealPropPopup(false)}
      >
        <div className={TableStyle.modal}>
          <div className={TableStyle.modalcontent}>
            <h2>Parameters</h2>
            <h4>Required Field</h4>
            <ul>
              <li>
                data:- data for table should be in json format , array of object
              </li>
              <li>
                columns :- array of objects having
                <ol>
                  <li>
                    {
                      "[{column: colName1, sortable: true},{column: colName2, sortable: true},...]"
                    }
                    ]
                  </li>
                </ol>
              </li>

              <li>
                {" "}
                recordsPerPageOption:- It is the options for no of records present
                in a page. It will be an array of integers
              </li>
              <li>
                defaultRecordPerPage: It is the no of records present in page by
                default. It will be an integer
              </li>
            </ul>
            <h4>Optional</h4>
            <ul>
              <li>
                tableHeader:- It is the header of the table. It will be of type
                String
              </li>
            </ul>
          </div>
          
        </div>
      </Popup>


      <button className={TableStyle.btn2} onClick={() => setSortableParaeterStructurePopup(true)}>
        Show Props
      </button>
      <Popup
        visible={sortableParaeterStructurePopup}
        onClose={() => setSortableParaeterStructurePopup(false)}
      >
        

        <div className={TableStyle.modal}>
          <div className={TableStyle.modalcontent}>
          {" "}
          data
          <ul>
            <li>
              <pre>{JSON.stringify(dummyData)}</pre>
            </li>
          </ul>
          columns
          <ul>
            <li>
              <pre>{JSON.stringify(columns)}</pre>
            </li>
          </ul>
        </div>
        </div>
      </Popup>
      </div>

      <h3>
        Link to code:-{" "}
        <a className={TableStyle.LinkBtn}
          href="https://github.com/Kash15if/custom-components/tree/main/src/CustomComponents/Tables/Sortable"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sortable Table
        </a>
      </h3>

      {/* ------------------------------------------------------------------Sortable------------------------------------------- */}

      {/* ------------------------------------------------------------------Filterable------------------------------------------- */}

      {/* Filterable */}
      
      <h1 className={TableStyle.MainHeader}>Filterable Table</h1>
      <p className={TableStyle.ContentText}>Features</p>
      <div className={TableStyle.MainText}>
      <ul>
        <li>
          Filter:- By typing/selecting in the input field , It will filter
          column accordingly{" "}
        </li>
        <li>
          Pagination:- There are two buttons next and prev to navigate to
          different pages
        </li>
        <li>
          No of Records per page:- It is a dropown, On selecting value no of
          records will be changed as selected
        </li>
      </ul>
      </div>

      {dummyData && columns && (
        <Filterable
          data={dummyData}
          columns={columns}
          filterableCols={columns}
          tableHeader="Filter Table"
          recordsPerPageOption={[5, 10, 20]}
          defaultRecordPerPage={5}
        />
      )}
      <div className={TableStyle.BtnAlign}>

      <button className={TableStyle.Btn1} onClick={() => setSortableRealPropPopup(true)}>
        Show Props Strucutre
      </button>
      <Popup
        visible={sortableRealPropPopup}
        onClose={() => setSortableRealPropPopup(false)}
      >
        <div className={TableStyle.modal}>
          <div className={TableStyle.modalcontent}>
          <h2>Parameters</h2>
          <h4>Required Field</h4>
          <ul>
            <li>
              data:- data for table should be in json format , array of object
            </li>
            <li>
              columns :- array of objects having
              <ol>
                <li>
                  {
                    "[{column: colName1, filterable: true},{column: colName2, filterable: true},...]"
                  }
                  ]
                </li>
              </ol>
            </li>

            <li>
              {" "}
              recordsPerPageOption:- It is the options for no of records present
              in a page. It will be an array of integers
            </li>
            <li>
              defaultRecordPerPage: It is the no of records present in page by
              default. It will be an integer
            </li>
          </ul>
          <h4>Optional</h4>
          <ul>
            <li>
              tableHeader:- It is the header of the table. It will be of type
              String
            </li>
          </ul>
        </div>
        </div>
      </Popup>

      <button className={TableStyle.btn2}  onClick={() => setSortableParaeterStructurePopup(true)}>
        Show Props
      </button>
      <Popup
        visible={sortableParaeterStructurePopup}
        onClose={() => setSortableParaeterStructurePopup(false)}
      >
           <div className={TableStyle.modal}>
          <div className={TableStyle.modalcontent}>
          {" "}
          data
          <ul>
            <li>
              <pre>{JSON.stringify(dummyData)}</pre>
            </li>
          </ul>
          columns
          <ul>
            <li>
              <pre>{JSON.stringify(columns)}</pre>
            </li>
          </ul>
        </div>
        </div>
      </Popup>
      </div>
      <h3>
        Link to code:-{" "}
        <a
          className={TableStyle.LinkBtn}
          href="https://github.com/Kash15if/custom-components/tree/main/src/CustomComponents/Tables/Sortable"
          target="_blank"
          rel="noopener noreferrer"
        >
          Filterable Table
        </a>
      </h3>
      

      {/* ------------------------------------------------------------------Filterable------------------------------------------- */}

      {/* ------------------------------------------------------------------Editable------------------------------------------- */}

      <h1 className={TableStyle.MainHeader}>Editable Table</h1>

      <h4 className={TableStyle.MainText}>Parameters</h4>
      <h4>Required Field</h4>

      <p className={TableStyle.ContentText}>Features</p>
      <div className={TableStyle.MainText}>
      <ul>
        <li>
          Sortable:- By clicking of the particular column of the table, It will
          sort the table wrt. clicked column{" "}
        </li>
        <li>
          Pagination:- There are two buttons next and prev to navigate to
          different pages
        </li>
        <li>
          No of Records per page:- It is a dropown, On selecting value no of
          records will be changed as selected
        </li>
      </ul>
      </div>
      {/* Edit */}
      {dummyData && columns && (
        <Editable
          data={dummyData}
          columns={columns}
          tableHeader="Editable Table"
          uniqueId={"_id"}
          recordsPerPageOption={[5, 10, 20]}
          defaultRecordPerPage={5}
          editApi={process.env.REACT_APP_TEST_API}
          deleteOneApi={process.env.REACT_APP_TEST_API}
        />
      )}
  
  <div className={TableStyle.BtnAlign}>
      <button className={TableStyle.Btn1} onClick={() => setSortableRealPropPopup(true)}>
        Show Props Strucutre
      </button>
      <Popup
        visible={sortableRealPropPopup}
        onClose={() => setSortableRealPropPopup(false)}
      >
        <div className={TableStyle.modal}>
          <div className={TableStyle.modalcontent2}>
          <ul>
            <li>
              data:- data for table should be in json format , array of object
            </li>
            <li>
              {" "}
              Property:-
              <ul>
                <li>column:- It is the column name in the db</li>
                <li>column:- It is the column alias name</li>
                <li>
                  editable:-True, if this column is editable. Also we have to
                  justify each column property in formInputDetails
                  <ol>
                    Form Input details:-
                    <li>
                      input type:- Type of the input. i.e. text , dropdown ,
                      radio, number, textarea,checkbox,datetime, password{" "}
                    </li>
                    <li>
                      If it is text then it doesnot require any data or label
                      but if it is dropdown or radio then it require parameter
                      data and label
                    </li>
                    <li>
                      data:- data is array of objects containing 2 parameters
                      label and value
                    </li>
                    <li>label : Label for radio and dropdown</li>
                    <li>date {`{min: "" , max: "" }`}</li>
                    <li>
                      textarea:-{" "}
                      {`{placeholder: "xyz" , name: "name" , lines: 2}`}
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              Complete structure :- array of objects having
              <ol>
                <li>
                  <pre>
                    {JSON.stringify(
                      [
                        {
                          column: "colName1",
                          columnLabel: "Column Label 1",
                          editable: true,
                          formInputDetails: {
                            defaultVal: "",
                            inputType: "dropdown",
                            label: "Please select from dropdown:",
                            data: [
                              { label: "X", value: "A" },
                              { label: "Y", value: "B" },
                              { label: "Z", value: "C" },
                            ],
                          },
                        },
                        {
                          column: "colName2",
                          columnLabel: "Column Label 1",
                          editable: true,
                          formInputDetails: {
                            defaultVal: "",
                            inputType: "radio",
                            label: "Please select one radio button:",
                            data: [
                              { label: "X", value: "A" },
                              { label: "Y", value: "B" },
                              { label: "Z", value: "C" },
                            ],
                          },
                        },
                        {
                          column: "colName2",
                          columnLabel: "Column Label 1",
                          editable: true,
                          createOnce: false,
                          formInputDetails: {
                            defaultVal: "",
                            inputType: "text",
                          },
                        },
                      ],
                      null,
                      2
                    )}
                  </pre>
                </li>
              </ol>
            </li>

            <li>
              {" "}
              recordsPerPageOption:- It is the options for no of records present
              in a page. It will be an array of integers
            </li>
            <li>
              defaultRecordPerPage: It is the no of records present in page by
              default. It will be an integer
            </li>
          </ul>
          <h4>Optional</h4>
          <ul>
            <li>
              tableHeader:- It is the header of the table. It will be of type
              String
            </li>
          </ul>
        </div>
        </div>
      </Popup>

      <button className={TableStyle.btn2} onClick={() => setSortEditFilterRealPropPopup(true)}>
        Show Props
      </button>
      <Popup
        visible={sortEditFilterRealPropPopup}
        onClose={() => setSortEditFilterRealPropPopup(false)}
      >
       <div className={TableStyle.modal}>
          <div className={TableStyle.modalcontent}>
          Props
          <ul>
            <li>{`  <SortFilterEdit data={dummyData}
                columns={columns}
                filterableCols={columns}
                tableHeader="Sort Filter and Edit Table"
                uniqueId={"id"}
                recordsPerPageOption={[5, 10, 20]}
                defaultRecordPerPage={5}
            />`}</li>
          </ul>
          data
          <ul>
            <li>
              <pre>{JSON.stringify(dummyData)}</pre>
            </li>
          </ul>
          columns
          <ul>
            <li>
              <pre>{JSON.stringify(columns)}</pre>
            </li>
          </ul>
        </div>
        </div>
      </Popup>
      </div>
      <h4>
        Props structure for the above table:- <button>Open Popup</button>
      </h4>
      <h3>
        Link to code:-{" "}
        <a
          className={TableStyle.LinkBtn}
          href="https://github.com/Kash15if/custom-components/tree/main/src/CustomComponents/Tables/Sortable"
          target="_blank"
          rel="noopener noreferrer"
        >
          Editable Table
        </a>
      </h3>

      {/* ------------------------------------------------------------------Editable------------------------------------------- */}

      {/* ------------------------------------------------------------------SortFilterEdit------------------------------------------- */}
      {/* Sort Filter and Edit */}

      <h1 className={TableStyle.MainHeader}>All Sort Filter and Edit together Table</h1>

      <h4>Parameters</h4>
      <h4>Required Field</h4>
      {dummyData && columns && (
        <SortFilterEdit
          data={dummyData}
          columns={columns}
          filterableCols={columns}
          tableHeader="Sort Filter and Edit Table"
          uniqueId={"id"}
          recordsPerPageOption={[5, 10, 20]}
          defaultRecordPerPage={5}
        />
      )}

<div className={TableStyle.BtnAlign}>
      <button className={TableStyle.btn2} onClick={() => setSortableParaeterStructurePopup(true)}>
        Show Props
      </button>
      <Popup
        visible={sortableParaeterStructurePopup}
        onClose={() => setSortableParaeterStructurePopup(false)}
      >
        <div className={TableStyle.modal}>
          <div className={TableStyle.modalcontent}>
        
          Props
          <ul>
            <li>{`  <SortFilterEdit data={dummyData}
                columns={columns}
                filterableCols={columns}
                tableHeader="Sort Filter and Edit Table"
                uniqueId={"id"}
                recordsPerPageOption={[5, 10, 20]}
                defaultRecordPerPage={5}
            />`}</li>
          </ul>
          data
          <ul>
            <li>
              <pre>{JSON.stringify(dummyData)}</pre>
            </li>
          </ul>
          columns
          <ul>
            <li>
              <pre>{JSON.stringify(columns)}</pre>
            </li>
          </ul>
        </div>
        </div>
      </Popup>
      </div>
      <h4>
        Props structure for the above table:- <button>Open Popup</button>
      </h4>
     
      <h3>
        Link to code:-{" "}
        <a
          className={TableStyle.LinkBtn}
          href="https://github.com/Kash15if/custom-components/tree/main/src/CustomComponents/Tables/Sortable"
          target="_blank"
          rel="noopener noreferrer"
        >
          Editable Table
        </a>
      </h3>

      {/* ---------------------------------------------------------------SortFilterEdit------------------------------------------- */}

      {/* --------------------------------------------------------------- Expandable table----------------------------------------- */}

      {/* Expandable table */}
      {/* {dummyData && columns && (
        <Expandable
          data={expandableTableData}
          columns={columns}
          tableHeader="Recursive Expandable Table"
          recordsPerPageOption={[5, 10, 20]}
          defaultRecordPerPage={5}
          uniqueId="_id"
        />
      )}

      <button onClick={() => setSortableParaeterStructurePopup(true)}>
        Show Props
      </button>
      <Popup
        visible={sortableParaeterStructurePopup}
        onClose={() => setSortableParaeterStructurePopup(false)}
      >
        <div>
          Props
          <ul>
            <li>{`<Expandable
                data={expandableTableData}
                columns={columns}
                tableHeader="Recursive Expandable Table"
                recordsPerPageOption={[5, 10, 20]}
                defaultRecordPerPage={5}
                uniqueId="_id"
            />`}</li>
          </ul>
          data
          <ul>
            <li>
              <pre>{JSON.stringify(expandableTableData)}</pre>
            </li>
          </ul>
          columns
          <ul>
            <li>
              <pre>{JSON.stringify(columns)}</pre>
            </li>
          </ul>
        </div>
      </Popup> */}

      {/* <h4>
        Props structure for the above table:- <button>Open Popup</button>
      </h4>
      <h3>
        Link to code:-{" "}
        <a
          href="https://github.com/Kash15if/custom-components/tree/main/src/CustomComponents/Tables/Sortable"
          target="_blank"
          rel="noopener noreferrer"
        >
          Editable Table
        </a>
      </h3> */}

      {/* ------------------------------------------------------------- Expandable table ------------------------------------------- */}

      {/* ------------------------------------------------------------------ExpandableWithComponent------------------------------------------- */}

      {expandableTableData && colmns && (
        <ExpandableWithComponent
          data={expandableTableData}
          columns={colmns}
          filterableCols={colmns}
          sortableCols={colmns}
          tableHeader="Expandable Table with components"
          recordsPerPageOption={[5, 10, 20]}
          defaultRecordPerPage={5}
          uniqueId="id"
          InnerComponent={InnerCard}
        ></ExpandableWithComponent>
      )}
       <div className={TableStyle.BtnAlign}>

      <button className={TableStyle.btn2} onClick={() => setExpandableWithCompRealPropPopup(true)}>
        Show Props
      </button>
      <Popup
        visible={expandableWithCompRealPropPopup}
        onClose={() => setExpandableWithCompRealPropPopup(false)}
      >
         <div className={TableStyle.modal}>
          <div className={TableStyle.modalcontent}>
          Code
          <ul>
            <li>{`<ExpandableWithComponent data={expandableTableData}
                columns={colmns}
                filterableCols={colmns}
                sortableCols={colmns}
                tableHeader="Expandable Table with components"
                recordsPerPageOption={[5, 10, 20]}
                defaultRecordPerPage={5}
                uniqueId="id"
                InnerComponent={InnerCard}
            >
            </ExpandableWithComponent>
`}</li>
          </ul>
          data
          <ul>
            <li>
              <pre>{JSON.stringify(expandableTableData)}</pre>
            </li>
          </ul>
          columns
          <ul>
            <li>
              <pre>{JSON.stringify(columns)}</pre>
            </li>
          </ul>
        </div>
        </div>
      </Popup>
      </div>
      <h4>
        Props structure for the above table:- <button>Open Popup</button>
      </h4>
      <h3>
        Link to code:-{" "}
        <a
          className={TableStyle.LinkBtn}
          href="https://github.com/Kash15if/custom-components/tree/main/src/CustomComponents/Tables/Sortable"
          target="_blank"
          rel="noopener noreferrer"
        >
          Editable Table
        </a>
      </h3>

      {/* ------------------------------------------------------------------ExpandableWithComponent------------------------------------------- */}

      {/* ------------------------------------------------------------------CRDUIE------------------------------------------- */}

      {/* Crud and Import Export */}
      {columns && (
        <CRUDIE
          data={data}
          columns={columns}
          filterableCols={columns}
          sortableCols={columns}
          tableHeader="CRUD Import Export Table"
          recordsPerPageOption={[5, 10, 20]}
          defaultRecordPerPage={5}
          uniqueId="_id"
          upDateData={upDateData}
          excelImport={true}
          excelExport={true}
          jsonImport={true}
          jsonExport={true}
          getDataApi={process.env.REACT_APP_TEST_API}
          createApi={process.env.REACT_APP_TEST_API}
          uploadBulkApi={process.env.REACT_APP_TEST_API + "/bulkData"}
          editApi={process.env.REACT_APP_TEST_API}
          deleteOneApi={process.env.REACT_APP_TEST_API}
          deleteMultipleApi={
            process.env.REACT_APP_TEST_API + "/delete-multiple"
          }
        />
      )}

      <button onClick={() => setCrudieRealPropPopup(true)}>Show Props</button>
      <Popup
        visible={crudieRealPropPopup}
        onClose={() => setCrudieRealPropPopup(false)}
      >
        <div>
          Code
          <ul>
            <li>{` <CRUDIE
                data={data}
                columns={columns}
                filterableCols={columns}
                sortableCols={columns}
                tableHeader="CRUD Import Export Table"
                recordsPerPageOption={[5, 10, 20]}
                defaultRecordPerPage={5}
                uniqueId="_id"
                upDateData={upDateData}
                excelImport={true}
                excelExport={true}
                jsonImport={true}
                jsonExport={true}
                getDataApi={process.env.REACT_APP_TEST_API}
                createApi={process.env.REACT_APP_TEST_API}
                uploadBulkApi={process.env.REACT_APP_TEST_API + "/bulkData"}
                editApi={process.env.REACT_APP_TEST_API}
                deleteOneApi={process.env.REACT_APP_TEST_API}
                deleteMultipleApi={process.env.REACT_APP_TEST_API + "/delete-multiple"}
            />`}</li>
          </ul>
          data
          <ul>
            <li>
              <pre>{JSON.stringify(data)}</pre>
            </li>
          </ul>
          columns
          <ul>
            <li>
              <pre>{JSON.stringify(columns)}</pre>
            </li>
          </ul>
        </div>
      </Popup>

      <h4>
        Props structure for the above table:- <button>Open Popup</button>
      </h4>
      <h3>
        Link to code:-{" "}
        <a
          href="https://github.com/Kash15if/custom-components/tree/main/src/CustomComponents/Tables/Sortable"
          target="_blank"
          rel="noopener noreferrer"
        >
          Editable Table
        </a>
      </h3>
      <h4>
        Dependencies :- <a href="https://www.npmjs.com/package/axios">Axios</a>{" "}
        and <a href="https://www.npmjs.com/package/xlsx">xlsx</a>
      </h4>

      {/* ------------------------------------------------------------------CRDUIE------------------------------------------- */}

      {/* ------------------------------------------------------------------ Multi Header Table Table------------------------------------------- */}

      {/* Multi Header Table Table */}

      {/* ------------------------------------------------------------------ Multi Header Table Table------------------------------------------- */}

      <h2>
        Data Source:-{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mockaroo.com/"
        >
          Mockaroo
        </a>
      </h2>
    </div>
  );
};


export default Tables;

