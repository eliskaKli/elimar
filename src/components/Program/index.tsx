import React from "react";

import { Layout } from "../preComponents";
import { 
    StyledTableMap,
    StyledProgram, 
    StyledTextPart, 
    StyledTablePart,
    StyledTableSaturday,
    StyledSubHeadline,
    StyledTableFriday,
    StyledTableSunday,
    /* StyledTableFrSu, */
    StyledTable,
 } from "./styled";
import { StyledHeadline } from "../Misto/components/PlaceIntro/styled";
import { StyledDescription } from "../Gifts/styled";

type TableRow = {
    time: string;
    subject: string;
}

type ProgramDataType = {
    description: {
        first: string;
        second: string;
        sunday: string;
    }
    tableSaturday: TableRow[];
    tableFriday: TableRow[];
    tableSunday: TableRow[];
}

const programData: ProgramDataType = {
    description: {
        first: "Areál Chotobuše nabízí rozmanité možnosti vyžití, a tak je jenom na vás, jak budete chtít den strávit. Nejsme příznivci tradičního nabytého svatebního programu, takže se předem omlouváme milovníkům tradic a různých svatebních her. A také víme, že je pro všechny důležitější dát si v klidu něco dobrého k jídlu a pití a popovídat si pořádně s blízkými a přáteli, než koukat na to, jak dva lidi rozbíjí talíř nebo se snaží jíst polévku.",
        second: "Mimo naplánovaný program (kde jsou časy pouze orientační) bude po celý den také možnost zahrát si kroket, dát si šlofíka v hamace ve stínu jabloní, a nebo zažít dobrodružství na Svatební Bojovce od tety Soni (doporučujeme obzvlášť pro ty menší). Večer pak můžeme společně posedět u ohně a zazpívat si, a nebo si trsnout v rytmu kvalitní i méně kvalitní hudby DJ Lahváče.",
        sunday: "Po oslavách a zážitcích přijde čas na zklidnění a vyklizení prostoru. Budeme rádi, když si najdete  chvilku, ještě s námi pobydete a pomůžete nám.",
    },
    tableSaturday: [ 
      {time: 'od 10h', subject: 'Na skleničku před obřadem'},
      {time: '11:00', subject: 'Svatební obřad'},
      {time: '11:30', subject: 'Společné focení'},
      {time: '12:45-14:15', subject: 'Přípitek & Svatební hostina'},
      {time: '14:45', subject: 'Krájení dortu'},
      {time: '15:30', subject: 'Soukromé: Sliby na skále'},
      {time: '17:30', subject: 'Kvíz aneb co jsme nevěděli'},
      {time: '19:00', subject: 'Hodinka tance bez elegance'},
      {time: '20:30', subject: 'Oheň & zpěv'},
      {time: '21:00', subject: 'DJ Lahváč aneb disko trisko'},
    ],
    tableFriday: [
      {time: 'odpoledne', subject: 'Příjezd prvních hostů'},
      {time: '', subject: 'Čančání Chotobuše'},
      {time: '19h', subject: 'Véča grilčo'},
    ],
    tableSunday: [
      {time: 'okolo 9:30', subject: 'Snídaně: les restes de noces.'},  
      {time: 'od 10:30', subject: 'Úklid aneb zpátky do divočiny'},
    ]
}

const Table: React.FC<{ rows: TableRow[] }> = ({ rows }) => (
    <table>
        {/* <tbody> */}
            {rows.map((row, index) => (
                <StyledTableMap>                
                    <tr key={row.subject}>
                        <td>{row.time}</td>
                        <td>{row.subject}</td>
                    </tr>
                </StyledTableMap>

            ))}
        {/* </tbody> */}
    </table>
)

const Program: React.FC = () => {

    const { description, tableSaturday, tableFriday, tableSunday } = programData

    return (
        <Layout.Container>
          <StyledProgram column={2}>
            <StyledTextPart>
              <StyledHeadline>
                Program
              </StyledHeadline>
              <StyledDescription>
                {description.first}
              </StyledDescription>
              <StyledDescription>
                {description.second}
              </StyledDescription>
              <StyledTableFriday>
                <StyledSubHeadline>
                    Pátek
                    </StyledSubHeadline>
                    <StyledTable>
                    <Table rows={tableFriday}/>
                    </StyledTable>
                </StyledTableFriday>
            </StyledTextPart>
            <StyledTablePart>
              <StyledTableSaturday>
                <StyledSubHeadline>
                  Sobota
                </StyledSubHeadline>
                <StyledTable>
                  <Table rows={tableSaturday}/>
                </StyledTable>
              </StyledTableSaturday>

              {/* <StyledTableFrSu> */}
                {/* <StyledTableFriday>
                <StyledSubHeadline>
                    Friday
                    </StyledSubHeadline>
                    <StyledTable>
                    <Table rows={tableFriday}/>
                    </StyledTable>
                </StyledTableFriday> */}
                    
                <StyledTableSunday>
                    <StyledSubHeadline>
                    Neděle
                    </StyledSubHeadline>
                    <StyledDescription>
                    {description.sunday}
                    </StyledDescription>
                    <StyledTable>
                    <Table rows={tableSunday}/>
                    </StyledTable>
                </StyledTableSunday>
              {/*   </StyledTableFrSu> */}
            </StyledTablePart>
          </StyledProgram>
        </Layout.Container>
    )
}

export default Program