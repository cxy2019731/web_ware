/**
 * 外部依赖
 * 1.ahooks https://ahooks.gitee.io
 * 2.启用了css module特性
 * 3.配置了webpack全局常量特性utils，如底部getStyle方法，为方便放入底部，根据个人想法自由组织
 */
import { memo, useRef, useMemo } from "react";
import { Table } from "antd";
import { useSize } from "ahooks";
import styles from "./styles.module.css";
/**
 * 撑满容器的 antd 表格
 * @param {object} props
 * 1.兼容antd官方表格所有参数。
 * 2.header ReactNode 额外自定义参数，表格顶部自定义内容区域,可放置搜索框等一系列内容
 * 3.headerStyle object 顶部内容自定义样式区域
 * @returns antd Table
 */
const FullTable = memo((props) => {
  const {
    header = null,
    headerStyle = {},

    dataSource = [],
    pagination = {},
    bordered = false,
    columns = [],
    footer = null,
    size = "default",
    title = null,
    showHeader = true,
    scroll = {},
    ...tableProps
  } = props;

  const tableBoxRef = useRef();
  const tableHeaderRef = useRef();

  const tableBoxSize = useSize(tableBoxRef);
  const tableHeaderSize = useSize(tableHeaderRef);

  const getScrollWidth = () => {
    if (tableBoxRef.current) {
      // 每列都会有1px的边框
      let columnsBorder = props?.columns?.length * 1;

      return columnsBorder;
    }
  };

  const getScrollHeight = () => {
    if (tableBoxRef.current) {
      // 表格dom
      let tableDom = tableBoxRef.current.querySelector(".ant-table");
      // 分页高度
      let paginationDom = tableBoxRef.current.querySelector(".ant-pagination");
      let paginationHeight = paginationDom
        ? getStyleFullHeight(paginationDom)
        : 0;
      // 表标题高度
      let tableTitle = tableBoxRef.current.querySelector(".ant-table-title");
      let tableTitleHeight = tableTitle ? getStyleFullHeight(tableTitle) : 0;
      // 表尾高度
      let tableFooter = tableBoxRef.current.querySelector(".ant-table-footer");
      let tableTitleFooter = tableFooter ? getStyleFullHeight(tableFooter) : 0;
      // 表格内容container
      let tableContaniner = tableBoxRef.current.querySelector(
        ".ant-table-container"
      );
      // 表头
      let tableHeader = tableContaniner.querySelector(".ant-table-header");
      let tableHeaderHeight = tableHeader ? getStyleFullHeight(tableHeader) : 0;
      // 表体
      let tableBody = tableContaniner.querySelector(".ant-table-body");
      // 设置表格主体盖度：减去分页，减去footer，减去title，减去header
      let tableDomHeight =
        tableBoxSize.height - paginationHeight - tableHeaderSize?.height || 0;
      // 设置最外层高度
      tableDom.style.height = tableDomHeight + "px";
      let tableContaninerHeight =
        tableDomHeight - tableTitleHeight - tableTitleFooter;
      // 设置表格conaniner高度
      tableContaniner.style.height = tableContaninerHeight + "px";
      // 设置表格内容高度
      tableBody.style.height = tableContaninerHeight - tableHeaderHeight + "px";
      // 设置表格滑动条
      tableBody.style.overflow = "auto auto";
      return tableContaninerHeight - tableHeaderHeight;
    }
  };

  const scrollProps = useMemo(() => {
    let nowScroll = {
      scrollToFirstRowOnChange: true,
      ...scroll,
      x: 0,
      y: 0,
    };
    if (tableBoxRef?.current) {
      nowScroll.x = getScrollWidth() || 0;
      nowScroll.y = getScrollHeight() || 0;
    }
    return nowScroll;
  }, [
    tableHeaderSize,
    tableBoxSize,
    bordered,
    footer,
    size,
    title,
    showHeader,
    scroll,
  ]);

  const paginationProps = useMemo(() => {
    return {
      total: pagination?.total || dataSource?.length,
      showQuickJumper: true,
      showSizeChanger: true,
      position: ["bottomCenter"],
      showTotal: (total, range) => {
        return (
          <span className={styles.custom_total}>
            共&nbsp;<b className={styles.custom_total_nums}>{total}</b>
            &nbsp;条数据 当前显示第 &nbsp;
            <b className={styles.custom_total_start}>{range[0]}</b>
            &nbsp;至&nbsp;
            <b className={styles.custom_total_end}>{range[1]}</b>&nbsp;条
          </span>
        );
      },
      ...pagination,
    };
  }, [pagination, dataSource]);

  return (
    <div className={styles.table_box} ref={tableBoxRef}>
      {/* 头部工具栏 */}
      <div
        className={styles.table_header}
        style={headerStyle}
        ref={tableHeaderRef}
      >
        {header}
      </div>
      {/* 表格主体 */}
      <div className={styles.table_body}>
        <Table
          rowKey={(row) => row?.id || row?.key || row?.value}
          {...tableProps}
          dataSource={dataSource}
          bordered={bordered}
          columns={columns}
          footer={footer}
          size={size}
          title={title}
          showHeader={showHeader}
          pagination={paginationProps}
          scroll={scrollProps}
        />
      </div>
    </div>
  );
});

/**
 * 获取当前dom的影响布局的高度，包括height/padding/border/margin
 * @param {element} domRef dom节点，ref需要传入ref.current
 * @returns number
 */
function getStyleFullHeight(domRef) {
  const pagHeight = utils.getStyle(domRef, "height").replace("px", "");
  const pagPaddingT = utils.getStyle(domRef, "padding-top").replace("px", "");
  const pagPaddingB = utils
    .getStyle(domRef, "padding-bottom")
    .replace("px", "");
  const pagMarginT = utils.getStyle(domRef, "margin-top").replace("px", "");
  const pagMarginB = utils.getStyle(domRef, "margin-bottom").replace("px", "");
  const pagBorderT = utils
    .getStyle(domRef, "border-top-width")
    .replace("px", "");
  const pagBorderB = utils
    .getStyle(domRef, "border-bottom-width")
    .replace("px", "");
  const pagBox = utils.getStyle(domRef, "box-sizing");

  let h = Number(pagHeight) + Number(pagMarginT) + Number(pagMarginB);
  if (pagBox != "border-box") {
    h =
      h +
      Number(pagPaddingT) +
      Number(pagPaddingB) +
      Number(pagBorderT) +
      Number(pagBorderB);
  }
  return h;
}
export default FullTable;


/**
 * 获取指定dom节点的指定css属性
 * @param {element} elem dom节点
 * @param {string} prop 属性名
 * @returns number | string
 */
function getStyle(elem,prop){
  if(window.getComputedStyle){
    return window.getComputedStyle(elem,null)[prop];
  }else{
    return elem.currentStyle[prop];
  }
}
  
  
