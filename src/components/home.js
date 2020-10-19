import React, { Component } from 'react';
// eslint-disable-next-line 
import { Layout, Button, Input, Row, Col, Table, Tabs, Card, Statistic, BackTop, Typography, Divider, Progress, DatePicker, PageHeader } from 'antd';
import { formatDate, getDataRegions, getDataProvinces, getDataNational, getCurrentTime, getPreviousDate, getDataNotes, getDataCountries } from "./helpers";

import { Line } from 'react-chartjs-2';
import moment from 'moment';

const { Content, Footer } = Layout;
const { Paragraph } = Typography;
const { TabPane } = Tabs;

export default class home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startDate: moment(),
            today: moment(),
            itemsRegions: [],
            itemsProvincies: [],
            itemsNotes: [],
            itemsWorls: [],
            totWorldConfirmed: 0,
            totWorldRecovered: 0,
            totWorldDeaths: 0,            
            totDimessi: 0,
            totDeceduti: 0,
            totCasi: 0,
            totPositivi: 0,
            totDimessiPrev: 0,
            totDecedutiPrev: 0,
            totCasiPrev: 0,
            totPositiviPrev: 0,
            varPositivi: 0,
            varPositiviPrev: 0,
            DataChart1: {},
            DataChart2: {},
        }
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        let today = null;
        let yesterday = null;

        if (getCurrentTime() < "17:30") {
            today = getPreviousDate(1);
            yesterday = getPreviousDate(2);
        } else {
            today = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
            yesterday = getPreviousDate(1);
        }

        sessionStorage.setItem("DATIAGGIORNATIAL", formatDate(today));

        await getDataNational(today)
            .then(tot => {
                this.setState({
                    totDimessi: tot[0],
                    totDeceduti: tot[1],
                    totCasi: tot[2],                    
                    totPositivi: tot[3],
                    varPositivi: tot[4]
                })
            });

        await getDataNational(yesterday)
            .then(tot => {
                this.setState({
                    totDimessiPrev: tot[0],
                    totDecedutiPrev: tot[1],
                    totCasiPrev: tot[2],
                    totPositiviPrev: tot[3],
                    varPositiviPrev: tot[4]
                })
            });

        await getDataRegions(today)
            .then(data => {
                this.setState({
                    itemsRegions: data
                })
            });
        
        await getDataProvinces(today)
            .then(data => {
                this.setState({
                    itemsProvincies: data
                })
            }); 

        await getDataNational()
            .then(tot => {
                this.setState({
                    DataChart1: {  
                        labels: tot[0],  
                        datasets: [  
                          {  
                            data: tot[1],  
                            backgroundColor: 'rgba(255, 170, 0, 0.2)',
                            borderColor: 'rgba(255, 170, 0,1)',
                            pointRadius: .5,
                            borderWidth: 1.5,
                          }  
                        ]  
                      }                  
                })
            });         
            
        await getDataNational()
            .then(tot => {
                this.setState({
                    DataChart2: {  
                        labels: tot[0],  
                        datasets: [  
                            {  
                                label: 'Totale positivi',
                                data: tot[2],  
                                backgroundColor: 'rgba(255, 170, 0, 0.2)',
                                borderColor: 'rgba(255, 170, 0, 1)',
                                pointRadius: .5,
                                borderWidth: 1.5,
                            },
                            {  
                                label: 'Dimessi Guariti',
                                data: tot[3],  
                                backgroundColor: 'rgba(76, 230, 0, 0.2)',
                                borderColor: 'rgba(76, 230, 0, 1)',
                                pointRadius: .5,
                                borderWidth: 1.5,
                            },
                            {  
                                label: 'Deceduti',
                                data: tot[4],  
                                backgroundColor: 'rgba(194, 194, 194, 0.2)',
                                borderColor: 'rgba(194, 194, 194, 1)',
                                pointRadius: .5,
                                borderWidth: 1.5,
                            }   
                        ]  
                      }                  
                })
            });               

        await getDataNotes(today)
            .then(data => {
                this.setState({
                    itemsNotes: data
                })
            });
           
        await getDataCountries()
            .then(data => {
                    let totalConfirmed = 0;
                    let totalRecovered = 0;
                    let totalDeaths = 0;
                    data.forEach(({ confirmed, recovered, deaths }) => {
                      totalConfirmed += confirmed;
                      totalRecovered += recovered;
                      totalDeaths += deaths;
                    });

                this.setState({
                    itemsWorls: data,
                    totWorldConfirmed: totalConfirmed,
                    totWorldRecovered: totalRecovered,
                    totWorldDeaths: totalDeaths,
                })
            });
            
    }

    handleChange(date, dateString) {
        let today = dateString
        let d = new Date();

        if (d.getDate().toString() === date.format('D')) {
            today = date.subtract(1, "days");
            today = today.format("YYYY-MM-DD");
        }

        getDataNational(today)
            .then(tot => {
                this.setState({
                    totDimessi: tot[0],
                    totDeceduti: tot[1],
                    totCasi: tot[2],                    
                    totPositivi: tot[3],
                    varPositivi: tot[4]
                })
            });

        let yesterday = date.subtract(1, "days").format("YYYY-MM-DD");

        getDataNational(yesterday)
            .then(tot => {
                this.setState({
                    totDimessiPrev: tot[0],
                    totDecedutiPrev: tot[1],
                    totCasiPrev: tot[2],
                    totPositiviPrev: tot[3],
                    varPositiviPrev: tot[4]
                })
            });
        
        getDataRegions(today)
            .then(data => {
                this.setState({
                    itemsRegions: data
                })
            });
        
        getDataProvinces()
            .then(data => {
                this.setState({
                    itemsProvincies: data
                })
            });        
      }

    render() {
        const columnsRegions = [
            {
                render: text => <span style={{color: 'white'}}>{text}</span>,
                title: 'Regione',
                dataIndex: 'denominazione_regione',
                key: 'denominazione_regione',
                sorter: (a, b) => {
                    if (a.denominazione_regione < b.denominazione_regione) {
                        return -1;
                    }
                    if (a.denominazione_regione > b.denominazione_regione) {
                        return 1;
                    }
                    //this.state.persons.sort(function(a, b){return b.totale_casi-a.totale_casi}
                },
                sortDirections: ['descend', 'ascend']
            },
            {
                render: text => <span style={{color: '#e60000'}}>{text}</span>,
                title: 'Totale casi',
                dataIndex: 'totale_casi',
                key: 'totale_casi',
                defaultSortOrder: 'descend',
                sorter: (a, b) => {
                    if (a.totale_casi < b.totale_casi) {
                        return -1;
                    }
                    if (a.totale_casi > b.totale_casi) {
                        return 1;
                    }
                },
                sortDirections: ['descend', 'ascend']
            },
            {
                render: text => <span style={{color: '#ffaa00'}}>{text}</span>,
                title: 'Totale positivi',
                dataIndex: 'totale_positivi',
                key: 'totale_positivi',
                sorter: (a, b) => {
                    if (a.totale_positivi < b.totale_positivi) {
                        return -1;
                    }
                    if (a.totale_positivi > b.totale_positivi) {
                        return 1;
                    }
                },
                sortDirections: ['descend', 'ascend']
            },
            {
                render: text => <span style={{color: '#ffaa00'}}>{text}</span>,
                title: 'Nuovi positivi',
                dataIndex: 'nuovi_positivi',
                key: 'nuovi_positivi',
                sorter: (a, b) => {
                    if (a.nuovi_positivi < b.nuovi_positivi) {
                        return -1;
                    }
                    if (a.nuovi_positivi > b.nuovi_positivi) {
                        return 1;
                    }
                },
                sortDirections: ['descend', 'ascend']
            },
            {
                render: text => <span style={{color: '#4ce600'}}>{text}</span>,
                title: 'Dimessi Guariti',
                dataIndex: 'dimessi_guariti',
                key: 'dimessi_guariti',
                sorter: (a, b) => {
                    if (a.dimessi_guariti < b.dimessi_guariti) {
                        return -1;
                    }
                    if (a.dimessi_guariti > b.dimessi_guariti) {
                        return 1;
                    }
                },
                sortDirections: ['descend', 'ascend']
            } ,
            {
                render: text => <span style={{color: '#adadad'}}>{text}</span>,
                title: 'Deceduti',
                dataIndex: 'deceduti',
                key: 'deceduti',
                sorter: (a, b) => {
                    if (a.deceduti < b.deceduti) {
                        return -1;
                    }
                    if (a.deceduti > b.deceduti) {
                        return 1;
                    }
                },
                sortDirections: ['descend', 'ascend']
            } 

            // 
        ];
        const columnsProvincies = [
            {
                title: 'Provincia',
                dataIndex: 'denominazione_provincia',
                key: 'denominazione_provincia',
                sorter: (a, b) => {
                    if (a.denominazione_provincia < b.denominazione_provincia) {
                        return -1;
                    }
                    if (a.denominazione_provincia > b.denominazione_provincia) {
                        return 1;
                    }
                },
                sortDirections: ['descend', 'ascend']
            },
            {
                title: 'Totale casi',
                dataIndex: 'totale_casi',
                defaultSortOrder: 'descend',
                key: 'totale_casi',
                sorter: (a, b) => {
                    if (a.totale_casi < b.totale_casi) {
                        return -1;
                    }
                    if (a.totale_casi > b.totale_casi) {
                        return 1;
                    }
                },
                sortDirections: ['descend', 'ascend']
            }
        ];         
        const legend = {display:false}
        const optionsChart1 = {
            scales: {
              yAxes: [{
                ticks: { // 
                  min: 0, max: 16000, stepSize: 2000 },                                
                gridLines: {
                  color: "rgb(84, 86, 89)",
                  borderDash: [2, 2],
                },
                scaleLabel: {
                  display: true,
                }
              }],              
                xAxes: [{
                  gridLines: {
                    color: "rgb(84, 86, 89)",
                    borderDash: [2, 2],
                  },                 
                    type: 'time',
                    time: {
                      unit: 'month',
                      unitStepSize: 1,                      
                      displayFormats: {
                        month: 'MMMM'
                      }
                  }
                }]
            }
        }       
        const optionsChart2 = {
            legend: {
                display: true,
                position: 'bottom',

              },            
            scales: {
              yAxes: [{
                ticks: { // 
                  min: 0, max: 300000, stepSize: 50000 },                
                gridLines: {
                  color: "rgb(84, 86, 89)",
                  borderDash: [2, 2],
                },
                scaleLabel: {
                  display: true,
                }
              }],              
                xAxes: [{
                  gridLines: {
                    color: "rgb(84, 86, 89)",
                    borderDash: [2, 2],
                  },                 
                    type: 'time',
                    time: {
                      unit: 'month',
                      unitStepSize: 1,                      
                      displayFormats: {
                        month: 'MMMM'
                      }
                  }
                }]
            }
        } 
        const columnsNotes = [
            {
                dataIndex: 'data',
                defaultSortOrder: 'descend',
                render: text => <span>{formatDate(text)}</span>,
                key: 'data',
                sorter: (a, b) => {
                    if (a.data < b.data) {
                        return -1;
                    }
                    if (a.data > b.data) {
                        return 1;
                    }
                },
                width: 100,
            },
            {
                dataIndex: 'note',
                key: 'note'
            }
        ];  
        
        const columnsCountries = [
            {
                render: text => <span style={{color: 'white'}}>{text}</span>,
                title: 'Paese',
                dataIndex: 'country',
                key: 'country',
                sorter: (a, b) => {
                    if (a.country < b.country) {
                        return -1;
                    }
                    if (a.country > b.country) {
                        return 1;
                    }
                    //this.state.persons.sort(function(a, b){return b.totale_casi-a.totale_casi}
                },
                sortDirections: ['descend', 'ascend']
            },
            {
                render: text => <span style={{color: '#e60000'}}>{text}</span>,
                title: 'Totale confermati',
                dataIndex: 'confirmed',
                key: 'confirmed',
                defaultSortOrder: 'descend',
                sorter: (a, b) => {
                    if (a.confirmed < b.confirmed) {
                        return -1;
                    }
                    if (a.confirmed > b.confirmed) {
                        return 1;
                    }
                },
                sortDirections: ['descend', 'ascend']
            },
            {
                render: text => <span style={{color: '#ffaa00'}}>{text}</span>,
                title: 'Totale ricoverati',
                dataIndex: 'recovered',
                key: 'recovered',
                sorter: (a, b) => {
                    if (a.recovered < b.recovered) {
                        return -1;
                    }
                    if (a.recovered > b.recovered) {
                        return 1;
                    }
                },
                sortDirections: ['descend', 'ascend']
            },
            {
                render: text => <span style={{color: '#adadad'}}>{text}</span>,
                title: 'Deceduti',
                dataIndex: 'deaths',
                key: 'deaths',
                sorter: (a, b) => {
                    if (a.deaths < b.deaths) {
                        return -1;
                    }
                    if (a.deaths > b.deaths) {
                        return 1;
                    }
                },
                sortDirections: ['descend', 'ascend']
            } 

            // 
        ]; 

        function disabledDate(current) {
            // Can not select days before today and today
            return current && current > moment().endOf('day');
        }

        return (
            <div>
                <BackTop />
                <Layout className="layout">
                    <PageHeader style={{ position: 'fixed', zIndex: 1, width: '100%' }}
                        className="site-page-header-responsive"
                        title="DATI COVID-19"
                        subTitle={"Situazione Italia e Mondo"} 
                        extra={[
                            <span>Dati aggiornati al </span>,
                            <DatePicker 
                                defaultValue={moment(sessionStorage.getItem("DATIAGGIORNATIAL"),'DD/MM/YYYY')}
                                format={'YYYY-MM-DD'}
                                onChange={this.handleChange} 
                                disabledDate={disabledDate}
                                />,
                        ]}                            
                    />
                    <Content className="site-layout" style={{ marginTop: 75 }}>

                        <Divider orientation="left">Situazione Italia</Divider>

                        <div className="card-container">
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <Col className="gutter-row" span={6}>
                                    <Card className="card-wrapper" bordered={false}>
                                        <Statistic
                                            className="card-wrapper-statistic"
                                            title="Totale positivi"
                                            value={this.state.totPositivi}
                                            suffix={<span> +{this.state.varPositivi}</span> }
                                            valueStyle={{color: '#ffaa00', textAlign: 'center'}}
                                        />
                                        <Paragraph style={{textAlign: 'center'}}>
                                            <Progress 
                                                strokeLinecap='square' 
                                                strokeWidth='15px'
                                                strokeColor='#ffaa00' 
                                                percent={(this.state.totPositivi / this.state.totCasi * 100).toFixed(2)}
                                            />
                                        </Paragraph>
                                    </Card>
                                </Col>                                
                                <Col className="gutter-row" span={6}>
                                    <Card className="card-wrapper" bordered={false}>
                                        <Statistic
                                            title="Deceduti"
                                            value={this.state.totDeceduti}
                                            suffix={<span> +{this.state.totDeceduti - this.state.totDecedutiPrev}</span> }
                                            valueStyle={{color: '#adadad', textAlign: 'center' }}
                                        />
                                        <Paragraph style={{textAlign: 'center'}}>
                                            <Progress 
                                                strokeLinecap='square' 
                                                strokeWidth='15px'
                                                strokeColor='#adadad' 
                                                percent={(this.state.totDeceduti / this.state.totCasi * 100).toFixed(2)}
                                            />
                                        </Paragraph>
                                    </Card>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Card className="card-wrapper" bordered={false}>
                                        <Statistic
                                            title="Dimessi/Guariti"
                                            value={this.state.totDimessi}
                                            suffix={<span> +{this.state.totDimessi - this.state.totDimessiPrev}</span> }
                                            valueStyle={{color: '#4ce600', textAlign: 'center' }}
                                        />
                                        <Paragraph style={{textAlign: 'center'}}>
                                            <Progress 
                                                strokeLinecap='square' 
                                                strokeWidth='15px'
                                                strokeColor='#4ce600' 
                                                percent={(this.state.totDimessi / this.state.totCasi * 100).toFixed(2)} 
                                            />
                                        </Paragraph>
                                    </Card>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Card className="card-wrapper" bordered={false} >
                                        <Statistic
                                            title="Totale casi"
                                            value={this.state.totCasi}
                                            valueStyle={{color: '#e60000', textAlign: 'center' }}
                                        />
                                        <Paragraph style={{textAlign: 'center'}}>
                                            <span style={{color: '#e60000'}}>+{this.state.totCasi - this.state.totCasiPrev}</span>                                            
                                        </Paragraph>
                                    </Card>
                                </Col>
                            </Row>
                        </div>

                        <div className="card-container">
                            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                                <Col className="gutter-row" span={8}>
                                    <Card className="card-wrapper" bordered={false}>
                                        <Tabs  defaultActiveKey="1">  
                                            <TabPane tab="REGIONI" key="1">
                                                <Table
                                                    dataSource={this.state.itemsRegions}
                                                    pagination={{
                                                        total: this.state.itemsRegions.length,
                                                        pageSize: this.state.itemsRegions.length,
                                                        hideOnSinglePage: true
                                                    }}
                                                    layout="fixed"
                                                    columns={columnsRegions}
                                                    bordered
                                                    size="middle"
                                                    rowKey="codice_regione"
                                                    scroll={{ y: 203 }} //456
                                                />
                                            </TabPane>
                                            <TabPane tab="PROVINCE" key="2">
                                                <Table
                                                    dataSource={this.state.itemsProvincies}
                                                    pagination={{
                                                        total: this.state.itemsProvincies.length,
                                                        pageSize: this.state.itemsProvincies.length,
                                                        hideOnSinglePage: true
                                                    }}
                                                    layout="fixed"
                                                    columns={columnsProvincies}
                                                    bordered
                                                    size="middle"
                                                    rowKey="codice_provincia"
                                                    scroll={{ y: 203 }}
                                                />
                                            </TabPane>
                                        </Tabs>
                                    </Card>
                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <Card className="card-wrapper" bordered={false} title="Nuovi positivi">
                                        <Line data={this.state.DataChart1} legend={legend} options={optionsChart1}/>
                                    </Card>
                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <Card className="card-wrapper" bordered={false} title="Andamento nazionale">
                                        <Line data={this.state.DataChart2} options={optionsChart2}/>
                                    </Card>
                                </Col>                                
                            </Row>
                        </div>

                        <div className="card-container">
                            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                                <Col className="gutter-row" span={8}>
                                    <Card className="card-wrapper" bordered={false}>
                                        <Table
                                            dataSource={this.state.itemsNotes}
                                            pagination={{
                                                total: this.state.itemsNotes.length,
                                                pageSize: this.state.itemsNotes.length,
                                                hideOnSinglePage: true
                                            }}
                                            //layout="fixed"
                                            showHeader={false}
                                            columns={columnsNotes}
                                            bordered
                                            title={() => 'Note'}
                                            size="small"
                                            //rowKey="date"
                                            scroll={{ y: 228 }} //456
                                        />
                                    </Card>
                                </Col>
                             
                            </Row>
                        </div>    
                        
                        <Divider orientation="left">Situazione Mondiale</Divider>

                        <div className="card-container">
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <Col className="gutter-row" span={6}>
                                    <Card className="card-wrapper" bordered={false}>
                                        <Statistic
                                            className="card-wrapper-statistic"
                                            title="Totale ricoverati"
                                            value={this.state.totWorldRecovered}
                                            valueStyle={{color: '#ffaa00', textAlign: 'center'}}
                                        />
                                    </Card>
                                </Col>                                
                                <Col className="gutter-row" span={6}>
                                    <Card className="card-wrapper" bordered={false}>
                                        <Statistic
                                            title="Deceduti"
                                            value={this.state.totWorldDeaths}
                                            valueStyle={{color: '#adadad', textAlign: 'center' }}
                                        />
                                    </Card>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Card className="card-wrapper" bordered={false} >
                                        <Statistic
                                            title="Totale casi"
                                            value={this.state.totWorldConfirmed}
                                            valueStyle={{color: '#e60000', textAlign: 'center' }}
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </div>

                        <div className="card-container">
                            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                                <Col className="gutter-row" span={12}>
                                    <Card className="card-wrapper" bordered={false}>
                                        <Table
                                            dataSource={this.state.itemsWorls}
                                            pagination={false}
                                            layout="fixed"
                                            columns={columnsCountries}
                                            bordered
                                            size="middle"
                                            rowKey="country"
                                            scroll={{ y: 228 }} //456    
                                        />
                                    </Card>
                                </Col>
                             
                            </Row>
                        </div>                          
                    </Content>
                    <Footer>
                        <span>© 2020 by Albe | </span>
                        <a href="https://creativecommons.org/licenses/by/4.0/deed.en" target="_blank" rel="noopener noreferrer">CC-BY-4.0</a>
                        

                        <div className="right">
                            Dataset COVID-19 Italia by{'\u00A0'}
                            <a href="https://github.com/pcm-dpc/COVID-19" target="_blank" rel="noopener noreferrer">
                                Dipartimento della Protezione Civile
                            </a>
                            {'\u00A0'}|{'\u00A0'}
                            Dataset COVID-19 Mondo by{'\u00A0'}
                            <a href="https://github.com/pomber/covid19" target="_blank" rel="noopener noreferrer">
                                Pomber
                            </a>
                        </div>                        
                    </Footer>
                </Layout>
            </div>
        );
    }
}
