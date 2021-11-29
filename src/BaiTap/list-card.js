import React from "react";
import Card from "./card";
export default function ListCard() {
    return (
        <div>
            <section id="smartphone" className="list-card container-fluid pt-5 pb-5">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <div><Card /></div>
                    <div><Card /></div>
                    <div><Card /></div>
                    <div><Card /></div>
                </div>
            </section>
            <section id="smartphone" className=" list-card container-fluid pb-5">
                <div className="row">
                    <div><Card /></div>
                    <div><Card /></div>
                    <div><Card /></div>
                    <div><Card /></div>
                </div>
            </section>
        </div>
    )
}