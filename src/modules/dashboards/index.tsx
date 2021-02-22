import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import { Bar } from "react-chartjs-2";

const rand = () => Math.floor(Math.random() * 255);


interface IAccountStatistic {
    labels: Array<string>;
    registration_data: Array<number>;
    verified_account_data: Array<number>;
    pending_account_data: Array<number>;
    rejected_account_data: Array<number>;
}

const generateAccountStatisticData = (props: IAccountStatistic) => {
    return {
        labels: props.labels,
        datasets: [
            {
                type: "line",
                label: 'Registrations',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: props.registration_data
            },
            {
                label: 'Verified accounts',
                backgroundColor: 'rgba(54, 162, 235,0.2)',
                borderColor: 'rgba(54, 162, 235,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(54, 162, 235,0.4)',
                hoverBorderColor: 'rgba(54, 162, 235,1)',
                data: props.verified_account_data
            },
            {
                label: 'Pending Verify Accounts',
                backgroundColor: 'rgba(255, 24, 24,0.2)',
                borderColor: 'rgba(255, 24, 24,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 24, 24,0.4)',
                hoverBorderColor: 'rgba(255, 24, 24,1)',
                data: props.pending_account_data
            },
            {
                label: 'Rejected Accounts',
                backgroundColor: 'rgba(194, 0, 255,0.2)',
                borderColor: 'rgba(194, 0, 255,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(194, 0, 255,0.4)',
                hoverBorderColor: 'rgba(194, 0, 255,1)',
                data: props.rejected_account_data
            }
        ]
    }
};

interface IInteractiveStatistic {
    labels: Array<string>;
    chat_data: Array<number>;
    traditional_matching_data: Array<number>;
    smart_chat_data: Array<number>;
}

const generateInteractiveStatisticData = (props: IInteractiveStatistic) => {
    return {
        labels: props.labels,
        datasets: [
            {
                label: 'Chats',
                data: props.chat_data,
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: 'Traditional matching',
                data: props.traditional_matching_data,
                backgroundColor: 'rgb(54, 162, 235)',
            },
            {
                label: 'Smart chat',
                data: props.smart_chat_data,
                backgroundColor: 'rgb(75, 192, 192)',
            },
        ],
    }
}

interface ISocialNetworkStatistic {
    labels: Array<string>;
    new_feed_data: Array<number>;
    story_data: Array<number>;
    follower_data: Array<number>;
}

const generateSocialNetworkStatisticData = (props: ISocialNetworkStatistic) => {
    return {
        labels: props.labels,
        datasets: [
            {
                label: 'New feeds',
                data: props.new_feed_data,
                backgroundColor: 'rgb(194, 0, 255)',
            },
            {
                label: 'User stories',
                data: props.story_data,
                backgroundColor: 'rgb(0, 255, 242)',
            },
            {
                label: 'Followers',
                data: props.follower_data,
                backgroundColor: 'rgb(225, 255, 0)',
            },
        ],
    }
}



const AccountStatisticFC = (props: any) => {
    const registration_data: Array<number> = [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
    const rejected_account_data: Array<number> = [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
    const pending_account_data: Array<number> = [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
    const verified_account_data: Array<number> = [rand(), rand(), rand(), rand(), rand(), rand(), rand()]


    const labels: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    return (
        <div>
            <div style={{
                width: "100%",
                textAlign: "center"
            }}>
                <h1>Account Statistics</h1>
            </div>
            <div style={{ height: "500px", width: "80%", padding: "0px 100px" }}>
                <Bar data={generateAccountStatisticData(
                    {
                        labels: labels,
                        registration_data: registration_data,
                        rejected_account_data: rejected_account_data,
                        pending_account_data: pending_account_data,
                        verified_account_data: verified_account_data
                    }
                )}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    stacked: true,
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            ],
                            xAxes: [
                                {
                                    stacked: true,
                                },
                            ],
                        }
                    }}
                    type="bar" />
            </div>
        </div>
    )
};

const InteractiveAccountStatisticFC = (props: any) => {
    const labels: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const chat_data: Array<number> = [rand(), rand(), rand(), rand(), rand(), rand(), rand()];
    const traditional_matching_data: Array<number> = [rand(), rand(), rand(), rand(), rand(), rand(), rand()];
    const smart_chat_data: Array<number> = [rand(), rand(), rand(), rand(), rand(), rand(), rand()];

    return (
        <div>
            <div style={{
                width: "100%",
                textAlign: "center"
            }}>
                <h1>Interactive Account Statistics</h1>
            </div>
            <div style={{ height: "500px", width: "80%", padding: "0px 100px" }}>
                <Bar data={
                    generateInteractiveStatisticData(
                        {
                            labels: labels,
                            chat_data: chat_data,
                            traditional_matching_data: traditional_matching_data,
                            smart_chat_data: smart_chat_data
                        }
                    )
                } options={{
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                }} />
            </div>
        </div>
    )
}

const SocialNetworkAccountStatisticFC = (props: any) => {
    const labels: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const new_feed_data: Array<number> = [rand(), rand(), rand(), rand(), rand(), rand(), rand()];
    const story_data: Array<number> = [rand(), rand(), rand(), rand(), rand(), rand(), rand()];
    const follower_data: Array<number> = [rand(), rand(), rand(), rand(), rand(), rand(), rand()];

    return (
        <div>
            <div style={{
                width: "100%",
                textAlign: "center"
            }}>
                <h1>Interactive Account Statistics</h1>
            </div>
            <div style={{ height: "500px", width: "80%", padding: "0px 100px" }}>
                <Bar data={
                    generateSocialNetworkStatisticData(
                        {
                            labels: labels,
                            new_feed_data: new_feed_data,
                            story_data: story_data,
                            follower_data: follower_data
                        }
                    )
                } options={{
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                }} />
            </div>
        </div>
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export const Dashboard = (props: any) => (

    <>
        <Card>
            <CardContent>
                <AccountStatisticFC />
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <InteractiveAccountStatisticFC />
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <SocialNetworkAccountStatisticFC />
            </CardContent>
        </Card>
    </>
);
