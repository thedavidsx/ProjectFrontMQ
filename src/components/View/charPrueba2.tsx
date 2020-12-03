import React from "react";
import { Bar, Polar } from "react-chartjs-2";
import { Button, Panel, GridContainer, GridItem } from '../commons/Sonda.React.Control'

class ChartsPage extends React.Component {
    state = {
        dataBar: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "% of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "rgba(255, 134,159,0.4)",
                        "rgba(98,  182, 239,0.4)",
                        "rgba(255, 218, 128,0.4)",
                        "rgba(113, 205, 205,0.4)",
                        "rgba(170, 128, 252,0.4)",
                        "rgba(255, 177, 101,0.4)"
                    ],
                    borderWidth: 2,
                    borderColor: [
                        "rgba(255, 134, 159, 1)",
                        "rgba(98,  182, 239, 1)",
                        "rgba(255, 218, 128, 1)",
                        "rgba(113, 205, 205, 1)",
                        "rgba(170, 128, 252, 1)",
                        "rgba(255, 177, 101, 1)"
                    ]
                }
            ]
        },
        barChartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        },
        dataPolar: {
            datasets: [
                {
                    data: [300, 50, 100, 40, 120],
                    backgroundColor: [
                        "rgba(247, 70, 74, 0.5)",
                        "rgba(70, 191, 189, 0.5)",
                        "rgba(253, 180, 92, 0.5)",
                        "rgba(148, 159, 177, 0.5)",
                        "rgba(77, 83, 96, 0.5)"
                    ],
                    label: "My dataset" // for legend
                }
            ],
            labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"]
        }
    }


    render() {
        return (
            <div>
                <GridContainer>

                    <GridItem xs={6}>
                        <h3 className="mt-5">Line chart</h3>
                        <Bar
                            width={500}
                            height={350}
                            data={this.state.dataBar}
                            options={this.state.barChartOptions}
                        />
                    </GridItem>
                    <GridItem xs={6}>
                        <h3 className="mt-5">Polar area chart</h3>
                        <Polar   
                            width={500}
                            height={350}
                            data={this.state.dataPolar} 
                            options={{ responsive: true }} 
                        /> 
                    </GridItem>
                </GridContainer>

            </div>

        );
    }
}

export default ChartsPage;