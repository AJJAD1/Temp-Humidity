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
  
  let objectListData = objectItemList.objectItem.objectItemList.field1
  console.log(objectListData,"final")
  const option = {
    series: [
      {
        type: 'gauge',
        progress: {
          show: true,
          width: 18
        },
        axisLine: {
          lineStyle: {
            width: 18
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          length: 15,
          lineStyle: {
            width: 2,
            color: 'skyblue'
          }
        },
        axisLabel: {
          distance: 25,
          color: 'blue',
          fontSize: 10
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 25,
          itemStyle: {
            borderWidth: 10
          }
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          fontSize: 20,
          offsetCenter: [0, '70%'],
            formatter: '{value} %',
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
    <><ReactECharts option={option} style={{ height: '18rem', width: '100%' }} onEvents={{
      'click': onChartClick,
      'legendselectchanged': onChartLegendselectchanged
    }} /></>
  )
}

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(LineChart)
);