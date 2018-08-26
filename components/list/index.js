import { Collapse } from "antd";

const Panel = Collapse.Panel;

const arr = ["职业技能", "工作经验", "自我评价", "兴趣爱好"]

export default (prpos) =>
  <div>
    <Collapse bordered={false}>
    {
      !!prpos.result ? arr.map((item, index) => {
        return (
          <Panel 
            header={item}
            key={index+1}
          >
            <div dangerouslySetInnerHTML={{ __html: prpos.result[index]}}></div>
          </Panel>
        )
      }) : null}
    </Collapse>
  </div>