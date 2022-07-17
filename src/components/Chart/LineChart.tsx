import ReactECharts from 'echarts-for-react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { getObjectAndName } from '../../data/manageObject/objectAction';

const mapStateToProps = (state: any) => ({
  objectItemList: state
});

const mapDispatchToProps = (dispatch: any) => ({
  getObjectAndNameDispatch: () => dispatch(getObjectAndName()),
});

type Props = WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const LineChart: React.FC<Props> = ({objectItemList})=> {
  
  let objectListData = objectItemList.objectItem.objectItemList.field2
  console.log(objectListData,"final")
  const option = {
    series: [
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        splitNumber: 12,
        itemStyle: {
          color: 'orange'
        },
        progress: {
          show: true,
          width: 30
        },
  
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 30
          }
        },
        axisTick: {
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: 'red'
          }
        },
        splitLine: {
          distance: -52,
          length: 14,
          lineStyle: {
            width: 3,
            color: 'red'
          }
        },
        axisLabel: {
          distance: -5,
          color: '#999',
          fontSize: 12
        },
        anchor: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          width: '60%',
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, '-15%'],
          fontSize: 25,
          fontWeight: 'normal',
          formatter: '{value} °C',
          color: 'red'
        },
        data: [
          {
            value: objectListData
          }
        ]
      },
  
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        itemStyle: {
          color: '#FD7347'
        },
        progress: {
          show: true,
          width: 8
        },
  
        pointer: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: objectListData
          }
        ]
      }
    ]
  };

  function onChartClick(param: any, echarts: any) {
    console.log(param.name);
  };

  function onChartLegendselectchanged(param: any, echarts: any) {
    console.log(param, echarts);
  };

  return (
    <><ReactECharts option={option} style={{ height: '19rem', width: '100%' }} onEvents={{
      'click': onChartClick,
      'legendselectchanged': onChartLegendselectchanged
    }} /></>
  )
}

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(LineChart)
);