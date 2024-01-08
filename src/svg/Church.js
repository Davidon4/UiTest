import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Church = ({style}) => (
  <Svg style={style} xmlns="http://www.w3.org/2000/svg" width={244} height={173} fill="none">
    <Path
      fill="#FF6584"
      d="M55.526 88.707c8.052 0 14.58-5.857 14.58-13.082 0-7.225-6.528-13.081-14.58-13.081S40.947 68.4 40.947 75.625s6.527 13.082 14.58 13.082Z"
    />
    <Path
      fill="#DA8215"
      d="M145.848 90.437c0 25.755-17.064 34.748-38.113 34.748-21.05 0-38.113-8.993-38.113-34.748 0-25.754 38.113-58.519 38.113-58.519s38.113 32.765 38.113 58.52Z"
    />
    <Path
      fill="#3F3D56"
      d="m106.346 121.245.39-21.554 16.245-26.666-16.183 23.284.175-9.691 11.196-19.293-11.149 16.728.315-17.431 11.989-15.36-11.939 12.619.197-31.963-1.239 42.313.102-1.746-12.19-16.74 11.994 20.091-1.136 19.468-.033-.517L91.028 77.17l14.009 19.442-.142 2.435-.025.037.011.2-2.881 49.39h3.85l.462-25.511 13.974-19.395-13.94 17.477Z"
    />
    <Path
      fill="#3F3D56"
      d="M182.621 114.763c0 25.755-17.063 34.748-38.113 34.748-21.049 0-38.113-8.993-38.113-34.748 0-25.755 38.113-58.52 38.113-58.52s38.113 32.765 38.113 58.52Z"
    />
    <Path
      fill="#F2F2F2"
      d="m143.12 145.571.39-21.555 16.245-26.666-16.184 23.285.176-9.692 11.196-19.292-11.15 16.727v.001l.316-17.432 11.989-15.359-11.94 12.618.198-31.962-1.24 42.312.102-1.745-12.189-16.74 11.994 20.091-1.136 19.467-.034-.517-14.051-17.617 14.009 19.443-.142 2.435-.026.036.012.2L138.773 173h3.85l.462-25.511 13.975-19.395-13.94 17.477Z"
    />
    <Path
      fill="#3F3D56"
      d="M110.953 114.763c0 25.755-17.064 34.748-38.113 34.748-21.05 0-38.113-8.993-38.113-34.748 0-25.755 38.113-58.52 38.113-58.52s38.113 32.765 38.113 58.52Z"
    />
    <Path
      fill="#F2F2F2"
      d="m71.451 145.571.39-21.555L88.088 97.35l-16.184 23.285.175-9.692 11.196-19.292-11.15 16.727v.001l.316-17.432 11.99-15.359-11.94 12.618.197-31.962-1.239 42.312.102-1.745-12.19-16.74 11.994 20.091-1.135 19.467-.034-.517-14.052-17.617 14.01 19.443-.143 2.435-.025.036.012.2L67.105 173h3.85l.462-25.511 13.975-19.395-13.94 17.477Z"
    />
    <Path
      fill="#2F2E41"
      d="M108.705 172.782c-18.229 0-35.894-5.671-49.985-16.047-14.09-10.376-23.736-24.816-27.293-40.857-3.556-16.042-.803-32.694 7.79-47.12 8.593-14.424 22.494-25.73 39.335-31.989 16.842-6.259 35.581-7.085 53.024-2.337 17.444 4.748 32.514 14.776 42.641 28.376 10.127 13.6 14.686 29.93 12.899 46.207-1.786 16.277-9.808 31.495-22.698 43.061-7.299 6.585-15.982 11.806-25.545 15.36-9.563 3.555-19.817 5.372-30.168 5.346Zm0-140.854c-43.114 0-78.19 31.472-78.19 70.157 0 38.685 35.076 70.158 78.19 70.158s78.189-31.473 78.189-70.158-35.075-70.157-78.189-70.157Z"
    />
    <Path
      fill="#F2F2F2"
      d="M173.132 142.42v30.105H44.29V142.42l64.421-30.107.134.063 64.287 30.044Z"
    />
    <Path
      fill="#000"
      d="M173.132 142.42v30.105h-64.287v-60.149l64.287 30.044Z"
      opacity={0.1}
    />
    <Path
      fill="#3F3D56"
      d="m103.208 130.738-4.832 1.637v-6.454l4.832-1.9v6.717ZM49.792 148.802l-1.61.546v-3.918l1.61-.639v4.011ZM55.43 147.116l-1.88.632v-4.245l1.88-.74v4.353ZM61.603 144.948l-2.148.725v-4.578l2.148-.848v4.701ZM69.119 142.299l-2.685.909v-4.763l2.685-1.056v4.91ZM78.245 139.168l-3.221 1.092v-5.186l3.22-1.268v5.362ZM89.25 135.555l-3.758 1.271v-5.847l3.758-1.478v6.054ZM49.792 156.75l-1.61.363v-3.976l1.61-.457v4.07ZM55.43 155.546l-1.88.422v-4.276l1.88-.531v4.385ZM61.603 154.1l-2.148.485v-4.579l2.148-.608v4.702ZM69.119 152.415l-2.685.605v-4.941l2.685-.758v5.094ZM78.245 150.247l-3.221.729v-5.305l3.22-.909v5.485ZM89.25 147.839l-4.026.908v-5.966l4.026-1.137v6.195ZM103.208 144.708l-4.832 1.089v-6.629l4.832-1.36v6.9ZM103.208 158.436l-4.832.552v-6.573l4.832-.82v6.841ZM49.792 164.457l-1.61.186v-3.799l1.61-.275v3.888ZM55.43 163.975l-1.88.213v-4.066l1.88-.317v4.17ZM61.603 163.253l-2.148.244v-4.579l2.148-.368v4.703ZM69.119 162.289l-2.685.308v-4.884l2.685-.459v5.035ZM78.245 161.326l-3.221.367v-5.425l3.22-.55v5.608ZM89.25 160.122l-4.026.456v-5.996l4.026-.685v6.225ZM167.897 148.802l1.611.546v-3.918l-1.611-.639v4.011ZM162.261 147.116l1.879.632v-4.245l-1.879-.74v4.353ZM156.087 144.948l2.147.725v-4.578l-2.147-.848v4.701ZM148.571 142.299l2.684.909v-4.763l-2.684-1.056v4.91ZM139.445 139.168l3.221 1.092v-5.186l-3.221-1.268v5.362ZM128.439 135.555l3.759 1.271v-5.847l-3.759-1.478v6.054ZM167.897 156.75l1.611.363v-3.976l-1.611-.457v4.07ZM162.261 155.546l1.879.422v-4.276l-1.879-.531v4.385ZM156.087 154.1l2.147.485v-4.579l-2.147-.608v4.702ZM148.571 152.415l2.684.605v-4.941l-2.684-.758v5.094ZM139.445 150.247l3.221.729v-5.305l-3.221-.909v5.485ZM128.439 147.839l4.027.908v-5.966l-4.027-1.137v6.195ZM114.482 144.708l4.831 1.089v-6.629l-4.831-1.36v6.9ZM114.482 158.436l4.831.552v-6.573l-4.831-.82v6.841ZM167.897 164.457l1.611.186v-3.799l-1.611-.275v3.888ZM162.261 163.975l1.879.213v-4.066l-1.879-.317v4.17ZM156.087 163.253l2.147.244v-4.579l-2.147-.368v4.703ZM148.571 162.289l2.684.308v-4.884l-2.684-.459v5.035ZM139.445 161.326l3.221.367v-5.425l-3.221-.55v5.608ZM128.439 160.122l4.027.456v-5.996l-4.027-.685v6.225ZM119.045 132.424l-4.832-1.635v-6.794l4.832 1.901v6.528Z"
    />
    <Path
      fill="#2F2E41"
      d="M164.412 167.165h-.394v5.654h.394v-5.654ZM169.052 168.704h-.279v4.006h.279v-4.006ZM173.176 169.193h-.246v3.521h.246v-3.521Z"
    />
    <Path
      fill="#3F3D56"
      d="M152.866 165.372v7.274l-5.234-.007-5.234-.008v-8.174l5.234.458 5.234.457ZM64.824 172.646l10.468-.015v-8.174l-10.468.914v7.275Z"
    />
    <Path
      fill="#000"
      d="M152.866 165.372v7.274l-5.234-.007v-7.724l5.234.457Z"
      opacity={0.1}
    />
    <Path fill="#2F2E41" d="M108.174 166.023h-.537v6.743h.537v-6.743Z" />
    <Path
      fill="#DA8215"
      d="M111.003 163.622c0 2.363-1.406 4.335-3.098 4.403-1.644.065-2.944-1.703-2.944-3.949 0-2.245 3.213-8.41 3.213-8.41s2.829 5.593 2.829 7.956Z"
    />
    <Path fill="#2F2E41" d="M45.017 168.184h-.32v4.022h.32v-4.022Z" />
    <Path
      fill="#DA8215"
      d="M46.705 166.752c0 1.409-.839 2.586-1.847 2.626-.981.039-1.756-1.016-1.756-2.355s1.916-5.017 1.916-5.017 1.687 3.336 1.687 4.746ZM166.381 167.388c0 1.34-.941 2.387-2.166 2.336-1.3-.055-2.415-1.314-2.415-2.808 0-1.495 2.415-5.229 2.415-5.229s2.166 4.36 2.166 5.701ZM170.448 168.862c0 .949-.668 1.691-1.535 1.655-.922-.039-1.712-.931-1.712-1.99s1.712-3.705 1.712-3.705 1.535 3.09 1.535 4.04ZM174.402 169.332c0 .835-.586 1.487-1.349 1.455-.81-.035-1.504-.818-1.504-1.749 0-.931 1.504-3.256 1.504-3.256s1.349 2.715 1.349 3.55Z"
    />
    <Path
      fill="#A0616A"
      d="M176.308 38.8s-2.613 7.033-1.161 8.595c1.451 1.563-8.709-4.688-8.709-4.688l5.516-5.73 4.354 1.823Z"
    />
    <Path
      fill="#2F2E41"
      d="M170.35 38.788c7.198 0 13.034-5.236 13.034-11.695 0-6.459-5.836-11.695-13.034-11.695s-13.034 5.236-13.034 11.695c0 6.46 5.836 11.695 13.034 11.695Z"
    />
    <Path
      fill="#A0616A"
      d="m221.014 117.985-6.677 4.688-3.774-5.47 6.677-4.167 3.774 4.949Z"
    />
  </Svg>
)
export default Church;