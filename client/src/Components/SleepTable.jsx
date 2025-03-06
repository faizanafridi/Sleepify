import React, { useMemo } from "react";
import sleepsarr from "../constants/data";
import { useTable } from "react-table";
import { nanoid } from "@reduxjs/toolkit";
import { FaSun } from "react-icons/fa6";
import { MdNightlightRound } from "react-icons/md";
import { useSelector } from "react-redux";

const SleepTable = () => {

const data = useSelector((state)=>state.sleep.sleeps);
  const columns = useMemo(
    () => [
      {
        Header: "DATE",
        accessor: "date",
      },
      {
        Header: "Asleep Time",
        accessor: "aSleepTime",
      },
      {
        Header: "WakeUp Time",
        accessor: "wakeUpTime",
      },
    ],
    []
  );

  const checkDayNight = (s) => {
    const hr = Number(s.split(":")[0]);
    if (hr >= 0 && hr < 12) {
      return true; //AM
    } else if (hr >= 12 && hr <= 23) {
      return false; //PM
    }
  };

  // const table = useTable({columns,data});
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="lg:w-[650px]  md:w-[350px]">
      <table className=" text-black" {...getTableProps()}>
        <thead className="md:text-2xl lg:text-4xl  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-900">
          {headerGroups.map((header) => (
            <tr
              className="flex flex-row lg:space-x-24 md:space-x-14"
              {...header.getHeaderGroupProps()}
            >
              {header.headers.map((column) => (
                <th className="" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="flex flex-col space-y-2" {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                className="flex flex-row lg:space-x-44 md:space-x-36 border-2 lg:text-2xl md:text-xl bg-white hover:bg-slate-100"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="">
                    <span className="flex flex-row gap-2">
                      {cell.render("Cell")}
                      {cell.render("Cell").props.cell.column.Header !=
                        "DATE" && (
                        <>
                          {checkDayNight(
                            cell.render("Cell").props.cell.value
                          ) ? (
                            <MdNightlightRound />
                          ) : (
                            <FaSun size={20} className="mt-2" />
                          )}
                        </>
                      )}
                    </span>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SleepTable;
