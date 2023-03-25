import Sortable from "../CustomComponents/Tables/Sortable/SortableTable"
import Filterable from "../CustomComponents/Tables/Filterable/FilterableTable"
import Editable from "../CustomComponents/Tables/Editable/Editable";
import CRUDIE from "../CustomComponents/Tables/CRUDIE/CRUDIE";
import SortFilterEdit from "../CustomComponents/Tables/Sort-Filter-Edit/Sort-Filter-Edit"
import Expandable from "../CustomComponents/Tables/ExpanedTable/ExpandedUsingRecursion"
import   "../Pages/MainPageStyke.moddule.css"


const Tables = ({ dummyData, columns, upDateData, data, expandableTableData }) => {
    return (<div >

        {/* Sortable */}
       <div className="MainPage">
        <h2>Sortable Table</h2>
        <h3>Parameters</h3>
        <h5>Required Field</h5>
        <ul>
            <li>data:- data for table should be in json format , array of object</li>
            <li>columns :- array of objects having
                <ol>
                    <li>{'[{column: colName1, sortable: true},{column: colName2, sortable: true},...]'}]
                    </li>
                </ol>
            </li>

            <li> recordsPerPageOption:- It is the options for no of records present in a page. It will be an array of integers</li>
            <li>defaultRecordPerPage: It is the no of records present in page by default. It will be an integer</li>
        </ul>
        <h5>Optional</h5>
        <ul>
            <li>tableHeader:- It is the header of the table. It will be of type String</li>
        </ul>

        <h5>Features</h5>
        <ul>

            <li>Sortable:- By clicking of the particular column of the table, It will sort the table wrt. clicked column </li>
            <li>Pagination:- There are two buttons next and prev to navigate to different pages</li>
            <li>No of Records per page:- It is a dropown, On selecting value no of records will be changed as selected</li>
        </ul>
        </div>
        <Sortable
            data={dummyData}
            columns={columns}
            tableHeader="Sortable Table"
            recordsPerPageOption={[5, 10, 20]}
            defaultRecordPerPage={5}
        />
       
       <div className="MainPage">
        <h3>Link to code:-  <a
            href="https://github.com/Kash15if/custom-components/tree/main/src/CustomComponents/Tables/Sortable"
            target="_blank"
            rel="noopener noreferrer">Sortable Table</a></h3>
        
        </div>


        {/* Filterable */}
        <div className="MainPage">
        <h2>Filterable Table</h2>

        <h3>Parameters</h3>
        <h5>Required Field</h5>
        <ul>
            <li>data:- data for table should be in json format , array of object</li>
            <li>columns :- array of objects having
                <ol>
                    <li>{'[{column: colName1, filterable: true},{column: colName2, filterable: true},...]'}]
                    </li>
                </ol>
            </li>

            <li> recordsPerPageOption:- It is the options for no of records present in a page. It will be an array of integers</li>
            <li>defaultRecordPerPage: It is the no of records present in page by default. It will be an integer</li>
        </ul>
        <h5>Optional</h5>
        <ul>
            <li>tableHeader:- It is the header of the table. It will be of type String</li>
        </ul>

        <h5>Features</h5>
        <ul>

            <li>Filter:- By typing/selecting in the input field , It will filter column accordingly </li>
            <li>Pagination:- There are two buttons next and prev to navigate to different pages</li>
            <li>No of Records per page:- It is a dropown, On selecting value no of records will be changed as selected</li>
        </ul>
        </div>

        {dummyData && columns && (
            <Filterable data={dummyData}
                columns={columns}
                filterableCols={columns}
                tableHeader="Filter Table"
                recordsPerPageOption={[5, 10, 20]}
                defaultRecordPerPage={5}
            />)}


        {/* Edit */}
        {dummyData && columns && (
            <Editable data={dummyData}
                columns={columns}
                filterableCols={columns}
                tableHeader="Editable Table"
                uniqueId={"id"}
                recordsPerPageOption={[5, 10, 20]}
                defaultRecordPerPage={5}
            />)}


        {/* Sort Filter and Edit */}
        {dummyData && columns && (
            <SortFilterEdit data={dummyData}
                columns={columns}
                filterableCols={columns}
                tableHeader="Sort Filter and Edit Table"
                uniqueId={"id"}
                recordsPerPageOption={[5, 10, 20]}
                defaultRecordPerPage={5}
            />)}


        {/* Expandable table */}
        {dummyData && columns && (
            <Expandable
                data={expandableTableData}
                columns={columns}
                filterableCols={columns}
                sortableCols={columns}
                tableHeader="Expandable Table"
                recordsPerPageOption={[5, 10, 20]}
                defaultRecordPerPage={5}
                uniqueId="id"
            />)}

        {/* Crud and Import Export */}
        {dummyData && columns && (
            <CRUDIE
                data={data}
                columns={columns}
                filterableCols={columns}
                sortableCols={columns}
                tableHeader="CRUD Import Export Table"
                recordsPerPageOption={[5, 10, 20]}
                defaultRecordPerPage={5}
                uniqueId="id"
                upDateData={upDateData}
            />
        )}


        {/* Expandable Table */}


    </div>);
}

export default Tables;