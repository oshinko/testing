# Nikkei 225 Mermaid line chart sample

日経平均株価の終値と5日移動平均線を、Mermaid の `xychart-beta` で描くサンプルです。

Data source: Nikkei Indexes, Historical Data, Open/High/Low/Close, updated Apr/15/2026.

```mermaid
xychart-beta
    title "Nikkei 225 Close and 5-day Moving Average"
    x-axis ["4/1", "4/2", "4/3", "4/6", "4/7", "4/8", "4/9", "4/10", "4/13", "4/14", "4/15"]
    y-axis "Nikkei 225" 52000 --> 59000
    line [53739.68, 52463.27, 53123.49, 53413.68, 53429.56, 56308.42, 55895.32, 56924.11, 56502.77, 57877.39, 58134.24]
    line [null, null, null, null, 53233.94, 53747.68, 54434.09, 55194.22, 55812.04, 56701.60, 57066.77]
```

## Notes

- 1本目の `line` は日経平均株価の終値です。
- 2本目の `line` は5日移動平均です。
- Mermaid の表示環境によって `null` が未対応の場合は、移動平均線用の先頭4点を削るなどの調整が必要です。
