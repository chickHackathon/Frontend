import MapComponent from "../../components/StudyRecord/MapComponent";
import TopBar from "../../components/Register/TopBar";
import StoreListComponent from "../../components/StudyRecord/StoreListComponent";
import {useState} from "react";

export default function StudyRecord() {
    const [cafes, setCafes] = useState<any[]>([]);
    return (
        <div>
            <TopBar>스터디 내역</TopBar>
            <MapComponent  setCafes={setCafes}/>
            <StoreListComponent  cafes={cafes}/>
        </div>
    );
}