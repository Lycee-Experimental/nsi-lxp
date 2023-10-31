# Simulateur de portes logiques

🙏🏽 Merci à **Jean-Philippe Pellet** pour sa réactivité [:material-git:](https://github.com/jppellet/Logic-Circuit-Simulator)

<div style="width: 100%; height: 150px">
    <logic-editor mode="design">
    <script type="application/json">
        { // JSON5
        v: 6,
        components: {
            or0: {type: 'or', pos: [105, 35], in: [0, 1], out: 2},
            in0: {type: 'in', pos: [25, 20], id: 3},
            in1: {type: 'in', pos: [25, 50], id: 4},
            out0: {type: 'out', pos: [190, 35], id: 5},
        },
        wires: [[4, 1], [3, 0], [2, 5]]
        }
    </script>
    </logic-editor>
</div>